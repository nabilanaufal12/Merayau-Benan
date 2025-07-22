// js/model.js
export const model = {
  whatsAppNumber: "6282223899746", // GANTI DENGAN NOMOR ANDA
  data: {
    food: [
      // Sarapan
      {
        id: "f1",
        name: "Lontong Sayur",
        desc: "Harga: Rp 5.000",
        img: "https://placehold.co/600x400/f97316/white?text=Lontong+Sayur",
      },
      {
        id: "f2",
        name: "Gado-Gado",
        desc: "Harga: Rp 5.000",
        img: "https://placehold.co/600x400/f97316/white?text=Gado-Gado",
      },
      {
        id: "f3",
        name: "Sate",
        desc: "Harga: Rp 5.000",
        img: "https://placehold.co/600x400/f97316/white?text=Sate",
      },
      {
        id: "f4",
        name: "Nasi Dagang",
        desc: "Lauk Ikan/Ayam/Tamban. Harga: Rp 5.000",
        img: "https://placehold.co/600x400/f97316/white?text=Nasi+Dagang",
      },
      // Makanan Utama
      {
        id: "f5",
        name: "Ayam Penyet",
        desc: "Harga: Rp 25.000",
        img: "https://placehold.co/600x400/f97316/white?text=Ayam+Penyet",
      },
      {
        id: "f6",
        name: "Nasi Goreng",
        desc: "Harga: Rp 15.000",
        img: "https://placehold.co/600x400/f97316/white?text=Nasi+Goreng",
      },
      {
        id: "f7",
        name: "Mie Goreng",
        desc: "Harga: Rp 15.000",
        img: "https://placehold.co/600x400/f97316/white?text=Mie+Goreng",
      },
      {
        id: "f8",
        name: "Kwetiau Goreng",
        desc: "Harga: Rp 15.000",
        img: "https://placehold.co/600x400/f97316/white?text=Kwetiau",
      },
      // Makanan Pre-Order
      {
        id: "f9",
        name: "Gonggong (Pre-Order)",
        desc: "Harga: Rp 30.000",
        img: "https://placehold.co/600x400/f97316/white?text=Gonggong",
      },
      {
        id: "f10",
        name: "Ikan Bakar (Pre-Order)",
        desc: "Harga: Rp 30.000",
        img: "https://placehold.co/600x400/f97316/white?text=Ikan+Bakar",
      },
      {
        id: "f11",
        name: "Cumi Masak Hitam (Pre-Order)",
        desc: "Harga: Rp 30.000",
        img: "https://placehold.co/600x400/f97316/white?text=Cumi+Hitam",
      },
      {
        id: "f12",
        name: "Capcay (Pre-Order)",
        desc: "Harga: Rp 20.000",
        img: "https://placehold.co/600x400/f97316/white?text=Capcay",
      },
      {
        id: "f13",
        name: "Asam Pedas (Pre-Order)",
        desc: "Harga: Rp 30.000",
        img: "https://placehold.co/600x400/f97316/white?text=Asam+Pedas",
      },
    ],
    drink: [
      // Minuman
      {
        id: "d1",
        name: "Air Mineral",
        desc: "Harga: Rp 4.000",
        img: "https://placehold.co/600x400/22d3ee/white?text=Air+Mineral",
      },
      {
        id: "d2",
        name: "Air Kelapa",
        desc: "Harga: Rp 10.000",
        img: "https://placehold.co/600x400/22d3ee/white?text=Air+Kelapa",
      },
      {
        id: "d3",
        name: "Jus Buah",
        desc: "Harga: Rp 6.000",
        img: "https://placehold.co/600x400/22d3ee/white?text=Jus+Buah",
      },
      {
        id: "d4",
        name: "Pop Ice",
        desc: "Harga: Rp 6.000",
        img: "https://placehold.co/600x400/22d3ee/white?text=Pop+Ice",
      },
      {
        id: "d5",
        name: "Teh O",
        desc: "Harga: Rp 5.000",
        img: "https://placehold.co/600x400/22d3ee/white?text=Teh+O",
      },
      {
        id: "d6",
        name: "Es Teh",
        desc: "Harga: Rp 7.000",
        img: "https://placehold.co/600x400/22d3ee/white?text=Es+Teh",
      },
      {
        id: "d7",
        name: "Kopi O",
        desc: "Harga: Rp 5.000",
        img: "https://placehold.co/600x400/22d3ee/white?text=Kopi+O",
      },
    ],
    transport: [
      {
        id: "t1",
        name: "Caesar Mawan (Trip)",
        desc: "1 trip untuk 6 orang. Harga: Rp 25.000",
        img: "https://placehold.co/600x400/0ea5e9/white?text=Caesar+Mawan",
      },
      {
        id: "t2",
        name: "Sewa Motor",
        desc: "Sewa harian. Harga: Rp 50.000 - Rp 100.000",
        img: "https://placehold.co/600x400/0ea5e9/white?text=Sewa+Motor",
      },
      {
        id: "t3",
        name: "Transportasi Laut (Memancing)",
        desc: "Sewa untuk 1 malam. Harga: Rp 400.000",
        img: "https://placehold.co/600x400/0ea5e9/white?text=Transportasi+Laut",
      },
    ],
    homestay: [
      {
        id: "h1",
        name: "Homestay Alamsyah",
        desc: "1 kamar, kamar mandi dalam, makan 1x. Harga: Rp 300.000",
        img: "https://placehold.co/600x400/14b8a6/white?text=Homestay+Alamsyah",
      },
      {
        id: "h2",
        name: "Homestay Ujang",
        desc: "1 kamar, makan 1x sehari. Harga: Rp 300.000",
        img: "https://placehold.co/600x400/14b8a6/white?text=Homestay+Ujang",
      },
      {
        id: "h3",
        name: "Homestay Jep",
        desc: "Per orang, dengan makan 1x sehari. Harga: Rp 250.000",
        img: "https://placehold.co/600x400/14b8a6/white?text=Homestay+Jep",
      },
      {
        id: "h4",
        name: "Penginapan Nuansa Melayu",
        desc: "Tipe A: Rp 300.000, Tipe B (lebih besar): Rp 350.000",
        img: "https://placehold.co/600x400/14b8a6/white?text=Nuansa+Melayu",
      },
      {
        id: "h5",
        name: "Benan Island Homestay",
        desc: "1 kamar per malam, makan 3x sehari. Harga: Rp 1.080.000",
        img: "https://placehold.co/600x400/14b8a6/white?text=Benan+Island+Homestay",
      },
    ],
    souvenir: [
      {
        id: "s1",
        name: "Kerupuk Ikan",
        desc: "Per 1 kg. Harga: Rp 80.000",
        img: "https://placehold.co/600x400/eab308/white?text=Kerupuk+Ikan",
      },
      {
        id: "s2",
        name: "Ikan Asin",
        desc: "Harga: Rp 15.000",
        img: "https://placehold.co/600x400/eab308/white?text=Ikan+Asin",
      },
      {
        id: "s3",
        name: "Otak-otak",
        desc: "Harga: Rp 30.000",
        img: "https://placehold.co/600x400/eab308/white?text=Otak-otak",
      },
      {
        id: "s4",
        name: "Kue Ikan Lepek",
        desc: "Harga: Rp 20.000",
        img: "https://placehold.co/600x400/eab308/white?text=Kue+Ikan+Lepek",
      },
    ],
    tour: [
      {
        id: "p1",
        name: "Pemandu Wisata Keliling",
        desc: "Mengikuti aktivitas nelayan di Pulau Benan. Harga: Rp 100.000 per hari",
        img: "https://placehold.co/600x400/8b5cf6/white?text=Pemandu+Wisata",
      },
    ],
  },
};
