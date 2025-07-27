// js/view.js
export const view = {
  renderGrid(type, data) {
    const grid = document.getElementById(`${type}-grid`);
    if (!grid) return;

    if (type === "gallery") {
      grid.innerHTML = data
        .map(
          (item) => `
                <div class="gallery-item" data-source="Sumber: ${
                  item.source || "Dokumentasi Pribadi"
                }">
                    <img src="${item.img}" alt="${
            item.title
          }" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Gambar+Tidak+Tersedia';">
                    <div class="gallery-overlay">
                        <div class="gallery-title">${item.title}</div>
                    </div>
                </div>
            `
        )
        .join("");
    } else if (Array.isArray(data)) {
      grid.innerHTML = this.generateCardHtml(type, data);
    } else {
      let html = "";
      const categoryTitles = {
        sarapan: "Sarapan",
        makananUtama: "Makanan Utama",
        preOrder: "Pre-Order (Pesan Dahulu)",
      };
      for (const category in data) {
        html += `<h3 class="category-subheader">${
          categoryTitles[category] || category
        }</h3>`;
        html += `<div class="item-grid">${this.generateCardHtml(
          type,
          data[category]
        )}</div>`;
      }
      grid.innerHTML = html;
    }
  },

  generateCardHtml(type, items) {
    return items
      .map((item) => {
        const images = Array.isArray(item.img) ? item.img : [item.img];
        const hasMultipleImages = images.length > 1;

        const imageSlides = images
          .map(
            (image) => `
                <div class="slider-slide" data-source="Sumber: ${
                  image.source || "Dokumentasi Pribadi"
                }">
                    <img src="${image.src}" alt="${
              item.name
            }" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Gambar+Tidak+Tersedia';">
                </div>
            `
          )
          .join("");

        const sliderControls = hasMultipleImages
          ? `<button class="slider-btn prev" data-direction="-1">&#10094;</button><button class="slider-btn next" data-direction="1">&#10095;</button><div class="slider-dots">${images
              .map(
                (_, i) =>
                  `<span class="dot ${
                    i === 0 ? "active" : ""
                  }" data-slide="${i}"></span>`
              )
              .join("")}</div>`
          : "";
        return `<div class="item-card"><div class="slider-container" data-id="${item.id}" data-current-index="0"><div class="slider-wrapper">${imageSlides}</div>${sliderControls}</div><div class="item-card-content"><h3>${item.name}</h3><p>${item.desc}</p><button class="btn btn-${type}" data-type="${type}" data-name="${item.name}">Pesan Sekarang</button></div></div>`;
      })
      .join("");
  },

  openLightbox(imageUrl) {
    const lightboxModal = document.getElementById("lightbox-modal");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxModal.style.display = "block";
    lightboxImg.src = imageUrl;
  },

  closeLightbox() {
    document.getElementById("lightbox-modal").style.display = "none";
  },

  renderAiResult(containerId, title, content) {
    const container = document.getElementById(containerId);
    if (!container) return;
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    if (!title && !content) return;
    const card = document.createElement("div");
    card.className = "ai-result-card";
    let html = "";
    if (title) {
      html += `<h4>${title}</h4>`;
    }
    if (content) {
      const formattedContent = content.replace(/\n/g, "<br>");
      html += `<p>${formattedContent}</p>`;
    }
    card.innerHTML = html;
    container.appendChild(card);
  },

  setButtonLoadingState(button, isLoading) {
    if (isLoading) {
      button.disabled = true;
      button.innerHTML = `<span class="loading-spinner"></span> Memproses...`;
    } else {
      button.disabled = false;
      button.innerHTML = "Tanya AI";
    }
  },

  setActivePage(pageId) {
    document
      .querySelectorAll(".page-section")
      .forEach((s) => s.classList.remove("active"));
    document.getElementById(`${pageId}-page`).classList.add("active");
    document
      .querySelectorAll(".nav-links a")
      .forEach((l) => l.classList.remove("active"));
    document.getElementById(`nav-${pageId}`).classList.add("active");
    window.scrollTo(0, 0);
  },

  openModal(type, name) {
    const modal = document.getElementById("order-modal");
    document.getElementById(
      "modal-title"
    ).textContent = `Formulir Pesan: ${name}`;
    document.getElementById("modal-item-name").value = name;
    document.getElementById("modal-item-type").value = type;
    modal.querySelectorAll("input, textarea").forEach((input) => {
      input.required = false;
    });
    document.getElementById("modal-name").required = true;
    document.getElementById("modal-phone").required = true;
    document
      .querySelectorAll(".specific-fields")
      .forEach((f) => (f.style.display = "none"));
    const activeFieldsContainer = document.getElementById(`${type}-fields`);
    if (activeFieldsContainer) {
      activeFieldsContainer.style.display = "block";
      activeFieldsContainer
        .querySelectorAll('input[type="date"], input[type="number"]')
        .forEach((input) => {
          input.required = true;
        });
    }
    const submitBtn = document.getElementById("modal-submit-btn");
    submitBtn.className = "btn";
    submitBtn.classList.add(`btn-${type}`);
    modal.style.display = "block";
  },

  closeModal() {
    document.getElementById("order-modal").style.display = "none";
    document.getElementById("modal-form").reset();
  },

  updateYear() {
    document.getElementById("year").textContent = new Date().getFullYear();
  },
};
