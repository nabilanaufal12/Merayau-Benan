// js/controller.js
import { model } from "./model.js";
import { view } from "./view.js";

export const controller = {
  sliderIntervals: {}, // Menyimpan interval untuk setiap slider

  init() {
    for (const type in model.data) {
      view.renderGrid(type, model.data[type]);
    }
    view.updateYear();
    this.setupEventListeners();
    this.initializeAllSliders(); // Inisialisasi semua slider
  },

  // --- LOGIKA SLIDER BARU ---
  initializeAllSliders() {
    document.querySelectorAll(".slider-container").forEach((slider) => {
      this.startAutoSlide(slider);

      slider.addEventListener("mouseenter", () => this.stopAutoSlide(slider));
      slider.addEventListener("mouseleave", () => this.startAutoSlide(slider));
    });
  },

  moveSlide(slider, direction) {
    const wrapper = slider.querySelector(".slider-wrapper");
    const slides = slider.querySelectorAll(".slider-slide");
    const totalSlides = slides.length;
    if (totalSlides <= 1) return;

    let currentIndex = parseInt(slider.dataset.currentIndex, 10);
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    slider.dataset.currentIndex = currentIndex;

    this.updateDots(slider, currentIndex);
  },

  goToSlide(slider, index) {
    const wrapper = slider.querySelector(".slider-wrapper");
    wrapper.style.transform = `translateX(-${index * 100}%)`;
    slider.dataset.currentIndex = index;
    this.updateDots(slider, index);
  },

  updateDots(slider, index) {
    const dots = slider.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  },

  startAutoSlide(slider) {
    const sliderId = slider.dataset.id;
    if (this.sliderIntervals[sliderId]) return; // Mencegah duplikasi interval

    const totalSlides = slider.querySelectorAll(".slider-slide").length;
    if (totalSlides <= 1) return;

    this.sliderIntervals[sliderId] = setInterval(() => {
      this.moveSlide(slider, 1); // Pindah ke slide berikutnya
    }, 4000); // Ganti gambar setiap 4 detik
  },

  stopAutoSlide(slider) {
    const sliderId = slider.dataset.id;
    clearInterval(this.sliderIntervals[sliderId]);
    delete this.sliderIntervals[sliderId];
  },
  // --- AKHIR LOGIKA SLIDER ---

  setupEventListeners() {
    document.body.addEventListener("click", (e) => {
      // ... (event listener navigasi, service card, dll. tetap sama) ...
      const navLink = e.target.closest(".nav-links a");
      if (navLink) {
        e.preventDefault();
        this.handleNavigation(navLink.dataset.page);
        return;
      }
      const navLogo = e.target.closest(".nav-logo");
      if (navLogo) {
        e.preventDefault();
        this.handleNavigation("home");
        return;
      }
      const serviceCard = e.target.closest(".service-card");
      if (serviceCard) {
        this.handleNavigation(serviceCard.dataset.page);
        return;
      }
      const itemButton = e.target.closest(".item-card .btn");
      if (itemButton) {
        const type = itemButton.dataset.type;
        const name = itemButton.dataset.name;
        this.handleOpenModal(type, name);
        return;
      }
      const aiButton = e.target.closest(".ai-input-group button");
      if (aiButton) {
        const type = aiButton.id.replace("-ai-btn", "");
        this.handleRecommendation(type);
        return;
      }
      const closeModalButton = e.target.closest(".close-button");
      if (closeModalButton) {
        this.handleCloseModal();
        return;
      }
      const modalBackground = e.target.closest("#order-modal");
      if (modalBackground === e.target) {
        this.handleCloseModal();
        return;
      }

      // Event listener untuk tombol slider
      const sliderBtn = e.target.closest(".slider-btn");
      if (sliderBtn) {
        const slider = sliderBtn.closest(".slider-container");
        const direction = parseInt(sliderBtn.dataset.direction, 10);
        this.moveSlide(slider, direction);
        return;
      }

      // Event listener untuk titik navigasi slider
      const dot = e.target.closest(".dot");
      if (dot) {
        const slider = dot.closest(".slider-container");
        const slideIndex = parseInt(dot.dataset.slide, 10);
        this.goToSlide(slider, slideIndex);
        return;
      }
    });

    // ... (sisa event listener tetap sama) ...
    document.getElementById("modal-form").addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });
    const backToTopButton = document.getElementById("back-to-top-btn");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    });
    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    const hamburgerButton = document.getElementById("hamburger-btn");
    const navLinks = document.querySelector(".nav-links");
    hamburgerButton.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("active");
      }
    });
  },

  // ... (sisa fungsi controller lainnya tetap sama) ...
  async callSecureApi(prompt, button, resultContainerId) {
    view.setButtonLoadingState(button, true);
    view.renderAiResult(resultContainerId, "Meminta saran dari AI...", "");
    const functionUrl = "/.netlify/functions/gemini";
    try {
      const response = await fetch(functionUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt }),
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
    let allItems;
    if (Array.isArray(model.data[type])) {
      allItems = model.data[type];
    } else {
      allItems = Object.values(model.data[type]).flat();
    }
    const itemList = allItems
      .map((item) => `"${item.name}" (deskripsi: ${item.desc})`)
      .join("; ");
    let contextPrompt = "";
    switch (type) {
      case "food":
        contextPrompt = `Anda adalah asisten kuliner untuk layanan lokal di Pulau Benan. Daftar menu yang kami sediakan adalah: ${itemList}. Berdasarkan permintaan pengguna: "${userInput}", rekomendasikan SATU menu dari daftar tersebut. Berikan jawaban singkat dan menarik, sebutkan nama menunya dengan jelas.`;
        break;
      case "drink":
        contextPrompt = `Anda adalah asisten minuman di Pulau Benan. Daftar minuman kami adalah: ${itemList}. Berdasarkan permintaan pengguna: "${userInput}", rekomendasikan SATU minuman yang paling cocok. Berikan alasan singkat.`;
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
        case "drink":
          details = `*Pesanan:* ${itemName}\n*Jumlah/Catatan:* ${
            document.getElementById("modal-drink-details").value
          }\n*Alamat Antar:* ${
            document.getElementById("modal-drink-address").value
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
