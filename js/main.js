// js/main.js
import { controller } from "./controller.js";

// Inisialisasi controller saat DOM sudah siap.
// Ini adalah satu-satunya tugas file ini.
document.addEventListener("DOMContentLoaded", () => {
  controller.init();
});
