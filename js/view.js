// js/view.js
export const view = {
  renderGrid(type, data) {
    const grid = document.getElementById(`${type}-grid`);
    if (!grid) return;

    if (type === "gallery") {
      // Logika khusus untuk galeri
      grid.innerHTML = data
        .map(
          (item) => `
                <div class="gallery-item">
                    <img src="${item.img}" alt="${item.title}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Gambar+Tidak+Tersedia';">
                    <div class="gallery-overlay">
                        <div class="gallery-title">${item.title}</div>
                    </div>
                </div>
            `
        )
        .join("");
    } else if (Array.isArray(data)) {
      // Logika untuk data tanpa kategori
      grid.innerHTML = this.generateCardHtml(type, data);
    } else {
      // Logika untuk data dengan kategori (makanan)
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
      .map(
        (item) => `
            <div class="item-card">
                <img src="${item.img}" alt="${item.name}" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Gambar+Tidak+Tersedia';">
                <div class="item-card-content">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                    <button class="btn btn-${type}" data-type="${type}" data-name="${item.name}">
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        `
      )
      .join("");
  },

  // ... sisa fungsi view tetap sama ...
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
