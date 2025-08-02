// js/model.js
// Mengimpor data dari file-file terpisah
import { foodData } from "./data/food.js";
import { drinkData } from "./data/drink.js";
import { transportData } from "./data/transport.js";
import { homestayData } from "./data/homestay.js";
import { souvenirData } from "./data/souvenir.js";
import { tourData } from "./data/tour.js";
import { galleryData } from "./data/gallery.js";

export const model = {
  whatsAppNumber: "6285263176321", // GANTI DENGAN NOMOR ANDA
  data: {
    food: foodData,
    drink: drinkData,
    transport: transportData,
    homestay: homestayData,
    souvenir: souvenirData,
    tour: tourData,
    gallery: galleryData,
  },
};
