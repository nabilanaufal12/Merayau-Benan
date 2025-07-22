// js/model.js
export const model = {
  whatsAppNumber: "6282223899746", // GANTI DENGAN NOMOR ANDA
  data: {
    food: {
      sarapan: [
        {
          id: "f1",
          name: "Lontong Sayur",
          desc: "Disajikan dengan kuah santan gurih dan sayuran segar. Harga: Rp 5.000",
          img: "https://placehold.co/600x400/f97316/white?text=Lontong+Sayur",
        },
        {
          id: "f2",
          name: "Gado-Gado",
          desc: "Salad sayuran segar disiram saus kacang khas yang lezat. Harga: Rp 5.000",
          img: "https://placehold.co/600x400/f97316/white?text=Gado-Gado",
        },
        {
          id: "f3",
          name: "Sate",
          desc: "Potongan daging ayam atau sapi yang dibakar sempurna. Harga: Rp 5.000",
          img: "https://placehold.co/600x400/f97316/white?text=Sate",
        },
        {
          id: "f4",
          name: "Nasi Dagang",
          desc: "Nasi gurih dengan pilihan lauk Ikan/Ayam/Tamban. Harga: Rp 5.000",
          img: "https://placehold.co/600x400/f97316/white?text=Nasi+Dagang",
        },
      ],
      makananUtama: [
        {
          id: "f5",
          name: "Ayam Penyet",
          desc: "Ayam goreng empuk disajikan dengan sambal pedas mantap. Harga: Rp 25.000",
          img: "https://placehold.co/600x400/f97316/white?text=Ayam+Penyet",
        },
        {
          id: "f6",
          name: "Nasi Goreng",
          desc: "Nasi goreng spesial khas Pulau Benan. Harga: Rp 15.000",
          img: "https://placehold.co/600x400/f97316/white?text=Nasi+Goreng",
        },
        {
          id: "f7",
          name: "Mie Goreng",
          desc: "Mie goreng lezat dengan bumbu tradisional. Harga: Rp 15.000",
          img: "https://placehold.co/600x400/f97316/white?text=Mie+Goreng",
        },
        {
          id: "f8",
          name: "Kwetiau Goreng",
          desc: "Kwetiau goreng seafood yang menggugah selera. Harga: Rp 15.000",
          img: "https://placehold.co/600x400/f97316/white?text=Kwetiau",
        },
      ],
      preOrder: [
        {
          id: "f9",
          name: "Gonggong (Pre-Order)",
          desc: "Disajikan segar langsung dari laut dengan sambal pedas manis. Harga: Rp 30.000",
          img: "https://placehold.co/600x400/f97316/white?text=Gonggong",
        },
        {
          id: "f10",
          name: "Ikan Bakar (Pre-Order)",
          desc: "Ikan segar pilihan yang dibakar dengan bumbu khas. Harga: Rp 30.000",
          img: "https://placehold.co/600x400/f97316/white?text=Ikan+Bakar",
        },
        {
          id: "f11",
          name: "Cumi Masak Hitam (Pre-Order)",
          desc: "Cumi segar dimasak dengan tinta hitamnya yang gurih. Harga: Rp 30.000",
          img: "https://placehold.co/600x400/f97316/white?text=Cumi+Hitam",
        },
        {
          id: "f12",
          name: "Capcay (Pre-Order)",
          desc: "Tumisan aneka sayuran segar dan seafood. Harga: Rp 20.000",
          img: "https://placehold.co/600x400/f97316/white?text=Capcay",
        },
        {
          id: "f13",
          name: "Asam Pedas (Pre-Order)",
          desc: "Ikan segar dalam kuah asam pedas yang kaya rempah. Harga: Rp 30.000",
          img: "https://placehold.co/600x400/f97316/white?text=Asam+Pedas",
        },
      ],
    },
    drink: [
      {
        id: "d1",
        name: "Air Mineral",
        desc: "Air minum kemasan yang menyegarkan. Harga: Rp 4.000",
        img: "https://placehold.co/600x400/22d3ee/white?text=Air+Mineral",
      },
      {
        id: "d2",
        name: "Air Kelapa",
        desc: "Air kelapa muda segar, langsung dari buahnya. Harga: Rp 10.000",
        img: "https://placehold.co/600x400/22d3ee/white?text=Air+Kelapa",
      },
      {
        id: "d3",
        name: "Jus Buah",
        desc: "Pilihan jus buah segar sesuai musim. Harga: Rp 6.000",
        img: "https://placehold.co/600x400/22d3ee/white?text=Jus+Buah",
      },
      {
        id: "d4",
        name: "Pop Ice",
        desc: "Minuman blender aneka rasa yang disukai semua. Harga: Rp 6.000",
        img: "https://placehold.co/600x400/22d3ee/white?text=Pop+Ice",
      },
      {
        id: "d5",
        name: "Teh O",
        desc: "Teh panas tanpa gula, disajikan hangat. Harga: Rp 5.000",
        img: "https://placehold.co/600x400/22d3ee/white?text=Teh+O",
      },
      {
        id: "d6",
        name: "Es Teh",
        desc: "Teh manis dingin yang menyegarkan dahaga. Harga: Rp 7.000",
        img: "https://placehold.co/600x400/22d3ee/white?text=Es+Teh",
      },
      {
        id: "d7",
        name: "Kopi O",
        desc: "Kopi hitam panas tanpa gula. Harga: Rp 5.000",
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
        desc: "Sewa harian untuk kebebasan berkeliling pulau. Harga: Rp 50.000 - Rp 100.000",
        img: "https://placehold.co/600x400/0ea5e9/white?text=Sewa+Motor",
      },
      {
        id: "t3",
        name: "Transportasi Laut (Memancing)",
        desc: "Sewa perahu untuk pengalaman memancing 1 malam. Harga: Rp 400.000",
        img: "https://placehold.co/600x400/0ea5e9/white?text=Transportasi+Laut",
      },
    ],
    homestay: [
      {
        id: "h1",
        name: "Homestay Alamsyah",
        desc: "Fasilitas: 1 Kamar, Kamar Mandi Dalam, Makan 1x. Harga: Rp 300.000",
        img: "https://placehold.co/600x400/14b8a6/white?text=Homestay+Alamsyah",
      },
      {
        id: "h2",
        name: "Homestay Ujang",
        desc: "Fasilitas: 1 Kamar, Termasuk Makan 1x Sehari. Harga: Rp 300.000",
        img: "https://placehold.co/600x400/14b8a6/white?text=Homestay+Ujang",
      },
      {
        id: "h3",
        name: "Homestay Jep",
        desc: "Harga per orang, sudah termasuk makan 1x sehari. Harga: Rp 250.000",
        img: "https://placehold.co/600x400/14b8a6/white?text=Homestay+Jep",
      },
      {
        id: "h4",
        name: "Penginapan Nuansa Melayu",
        desc: "Fasilitas: AC, WiFi. Tipe A: Rp 300.000, Tipe B (lebih besar): Rp 350.000",
        img: "https://placehold.co/600x400/14b8a6/white?text=Nuansa+Melayu",
      },
      {
        id: "h5",
        name: "Benan Island Homestay",
        desc: "Fasilitas: AC, WiFi, Pemandangan Laut, Makan 3x Sehari. Harga: Rp 1.080.000",
        img: "https://placehold.co/600x400/14b8a6/white?text=Benan+Island+Homestay",
      },
    ],
    souvenir: [
      {
        id: "s1",
        name: "Kerupuk Ikan",
        desc: "Kerupuk ikan tenggiri asli, renyah dan gurih. Harga per 1 kg: Rp 80.000",
        img: "https://placehold.co/600x400/eab308/white?text=Kerupuk+Ikan",
      },
      {
        id: "s2",
        name: "Ikan Asin",
        desc: "Ikan segar yang diolah secara tradisional. Harga: Rp 15.000",
        img: "https://placehold.co/600x400/eab308/white?text=Ikan+Asin",
      },
      {
        id: "s3",
        name: "Otak-otak",
        desc: "Otak-otak ikan bakar dengan bumbu khas. Harga: Rp 30.000",
        img: "https://placehold.co/600x400/eab308/white?text=Otak-otak",
      },
      {
        id: "s4",
        name: "Kue Ikan Lepek",
        desc: "Kue tradisional gurih berbahan dasar ikan. Harga: Rp 20.000",
        img: "https://placehold.co/600x400/eab308/white?text=Kue+Ikan+Lepek",
      },
    ],
    tour: [
      {
        id: "p1",
        name: "Pemandu Wisata Keliling",
        desc: "Jelajahi pulau dan ikuti aktivitas nelayan bersama pemandu lokal. Harga per hari: Rp 100.000",
        img: "https://placehold.co/600x400/8b5cf6/white?text=Pemandu+Wisata",
      },
    ],
    gallery: [
      {
        id: "g1",
        title: "Pantai Pasir Putih",
        img: "https://placehold.co/500x700/ec4899/white?text=Pantai+Pasir+Putih",
      },
      {
        id: "g2",
        title: "Dermaga Senja",
        img: "https://placehold.co/500x600/ec4899/white?text=Dermaga+Senja",
      },
      {
        id: "g3",
        title: "Hutan Bakau",
        img: "https://placehold.co/500x800/ec4899/white?text=Hutan+Bakau",
      },
      {
        id: "g4",
        title: "Kehidupan Bawah Laut",
        img: "https://placehold.co/500x500/ec4899/white?text=Bawah+Laut",
      },
      {
        id: "g5",
        title: "Perkampungan Nelayan",
        img: "https://placehold.co/500x750/ec4899/white?text=Perkampungan+Nelayan",
      },
      {
        id: "g6",
        title: "Matahari Terbenam",
        img: "https://placehold.co/500x650/ec4899/white?text=Matahari+Terbenam",
      },
    ],
  },
};
