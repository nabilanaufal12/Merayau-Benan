// js/view.js
export const view = {
  renderGrid(type, data) {
    const grid = document.getElementById(`${type}-grid`);
    if (!grid) return;

    grid.innerHTML = data
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

  // --- FUNGSI AI BARU ---
  renderAiResult(containerId, title, content) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Menghapus hasil sebelumnya
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
      // Mengganti newline dengan <br> untuk tampilan HTML
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

  // --- Sisa fungsi view tetap sama ---
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

    document
      .querySelectorAll(".specific-fields")
      .forEach((f) => (f.style.display = "none"));
    document.getElementById(`${type}-fields`).style.display = "block";

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
