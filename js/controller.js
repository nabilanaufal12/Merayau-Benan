// js/controller.js
import { model } from "./model.js";
import { view } from "./view.js";

export const controller = {
  init() {
    for (const type in model.data) {
      view.renderGrid(type, model.data[type]);
    }
    view.updateYear();
    this.setupEventListeners();
  },

  setupEventListeners() {
    // Event listener untuk form submission
    document.getElementById("modal-form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });

    // Event delegation untuk semua klik navigasi
    document.querySelector(".navbar").addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (!link) return;
      e.preventDefault();

      if (link.classList.contains("nav-logo")) {
        this.handleNavigation("home");
      } else if (link.dataset.page) {
        this.handleNavigation(link.dataset.page);
      }
    });

    // Event delegation untuk semua kartu di halaman utama dan halaman item
    document.querySelector("main").addEventListener("click", (e) => {
      const itemButton = e.target.closest(".item-card .btn");
      if (itemButton) {
        const type = itemButton.dataset.type;
        const name = itemButton.dataset.name;
        this.handleOpenModal(type, name);
        return;
      }

      const serviceCard = e.target.closest(".service-card");
      if (serviceCard) {
        const page = serviceCard.dataset.page;
        this.handleNavigation(page);
        return;
      }
    });

    // Event listener untuk menutup modal
    const modal = document.getElementById("order-modal");
    modal.querySelector(".close-button").addEventListener("click", () => {
      this.handleCloseModal();
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        this.handleCloseModal();
      }
    });

    // Event listener untuk semua tombol AI
    document
      .getElementById("food-ai-btn")
      .addEventListener("click", () => this.handleRecommendation("food"));
    document
      .getElementById("transport-ai-btn")
      .addEventListener("click", () => this.handleRecommendation("transport"));
    document
      .getElementById("homestay-ai-btn")
      .addEventListener("click", () => this.handleRecommendation("homestay"));
    document
      .getElementById("souvenir-ai-btn")
      .addEventListener("click", () => this.handleRecommendation("souvenir"));
    document
      .getElementById("tour-ai-btn")
      .addEventListener("click", () => this.handleRecommendation("tour"));
  },

  // --- LOGIKA AI DIPERBARUI UNTUK MEMANGGIL SERVERLESS FUNCTION ---
  async callSecureApi(prompt, button, resultContainerId) {
    view.setButtonLoadingState(button, true);
    view.renderAiResult(resultContainerId, "Meminta saran dari AI...", "");

    // Alamat "pintu belakang rahasia" kita di Netlify
    const functionUrl = "/.netlify/functions/gemini";

    try {
      const response = await fetch(functionUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt }), // Kirim prompt ke fungsi kita
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }

      view.renderAiResult(resultContainerId, "Saran dari AI", data.result);
    } catch (error) {
      console.error("Error calling secure API:", error);
      view.renderAiResult(
        resultContainerId,
        "Oops, terjadi kesalahan!",
        error.message
      );
    } finally {
      view.setButtonLoadingState(button, false);
    }
  },

  handleRecommendation(type) {
    const inputElement = document.getElementById(`${type}-ai-input`);
    const buttonElement = document.getElementById(`${type}-ai-btn`);
    const resultContainerId = `${type}-ai-result`;

    const userInput = inputElement.value;
    if (!userInput) {
      alert("Mohon tulis keinginan Anda terlebih dahulu.");
      return;
    }

    const itemList = model.data[type]
      .map((item) => `"${item.name}" (deskripsi: ${item.desc})`)
      .join("; ");

    let contextPrompt = "";
    switch (type) {
      case "food":
        contextPrompt = `Anda adalah asisten kuliner untuk layanan lokal di Pulau Benan. Daftar menu yang kami sediakan adalah: ${itemList}. Berdasarkan permintaan pengguna: "${userInput}", rekomendasikan SATU menu dari daftar tersebut. Berikan jawaban singkat dan menarik, sebutkan nama menunya dengan jelas.`;
        break;
      case "transport":
        contextPrompt = `Anda adalah asisten transportasi di Pulau Benan. Layanan kami adalah: ${itemList}. Berdasarkan kebutuhan pengguna: "${userInput}", rekomendasikan SATU layanan yang paling sesuai. Jelaskan kenapa layanan itu cocok.`;
        break;
      case "homestay":
        contextPrompt = `Anda adalah asisten akomodasi di Pulau Benan. Pilihan penginapan kami adalah: ${itemList}. Berdasarkan keinginan pengguna: "${userInput}", rekomendasikan SATU penginapan yang paling pas. Berikan alasan singkat.`;
        break;
      case "souvenir":
        contextPrompt = `Anda adalah asisten belanja oleh-oleh di Pulau Benan. Produk kami adalah: ${itemList}. Berdasarkan permintaan pengguna: "${userInput}", rekomendasikan SATU produk. Jelaskan keunikannya.`;
        break;
      case "tour":
        contextPrompt = `Anda adalah asisten wisata di Pulau Benan. Paket wisata kami adalah: ${itemList}. Berdasarkan permintaan pengguna: "${userInput}", buatkan draf rencana perjalanan singkat yang menarik. Anda boleh merekomendasikan satu atau lebih paket wisata dari daftar yang ada sebagai bagian dari rencana tersebut.`;
        break;
    }

    this.callSecureApi(contextPrompt, buttonElement, resultContainerId);
  },

  handleNavigation(pageId) {
    view.setActivePage(pageId);
  },
  handleOpenModal(type, name) {
    view.openModal(type, name);
  },
  handleCloseModal() {
    view.closeModal();
  },
  handleFormSubmit() {
    try {
      const name = document.getElementById("modal-name").value;
      const phone = document.getElementById("modal-phone").value;
      const itemName = document.getElementById("modal-item-name").value;
      const itemType = document.getElementById("modal-item-type").value;

      if (!name || !phone) {
        alert("Nama dan Nomor HP wajib diisi.");
        return;
      }

      let details = "";
      switch (itemType) {
        case "food":
          details = `*Pesanan:* ${itemName}\n*Jumlah/Catatan:* ${
            document.getElementById("modal-food-details").value
          }\n*Alamat Antar:* ${
            document.getElementById("modal-food-address").value
          }`;
          break;
        case "transport":
          details = `*Layanan:* ${itemName}\n*Jemput:* ${
            document.getElementById("modal-transport-pickup").value
          }\n*Tujuan:* ${
            document.getElementById("modal-transport-destination").value
          }`;
          break;
        case "homestay":
          details = `*Penginapan:* ${itemName}\n*Check-in:* ${
            document.getElementById("modal-homestay-checkin").value
          }\n*Check-out:* ${
            document.getElementById("modal-homestay-checkout").value
          }\n*Jumlah Tamu:* ${
            document.getElementById("modal-homestay-pax").value
          } orang`;
          break;
        case "souvenir":
          details = `*Produk:* ${itemName}\n*Jumlah/Catatan:* ${
            document.getElementById("modal-souvenir-details").value
          }\n*Alamat Antar:* ${
            document.getElementById("modal-souvenir-address").value
          }`;
          break;
        case "tour":
          details = `*Paket Wisata:* ${itemName}\n*Tanggal:* ${
            document.getElementById("modal-tour-date").value
          }\n*Jumlah Orang:* ${
            document.getElementById("modal-tour-pax").value
          } orang`;
          break;
      }

      const message =
        `*-- PESANAN BARU --*\n\nHalo, saya ingin memesan layanan berikut:\n\n*Nama Pemesan:* ${name}\n*No. HP:* ${phone}\n\n*Detail Layanan:*\n${details}\n\nMohon informasinya. Terima kasih!`
          .trim()
          .replace(/\n\s+\n/g, "\n\n");
      const whatsappUrl = `https://wa.me/${
        model.whatsAppNumber
      }?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");
      view.closeModal();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Terjadi kesalahan saat membuat pesan WhatsApp. Silakan periksa kembali isian Anda.\n\nError: " +
          error.message
      );
    }
  },
};
