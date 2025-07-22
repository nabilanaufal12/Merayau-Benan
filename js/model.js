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
          img: "https://akcdn.detik.net.id/visual/2020/03/20/c863d02e-09d9-4000-b6e2-1e71287a5441_169.jpeg?w=700&q=90",
        },
        {
          id: "f2",
          name: "Gado-Gado",
          desc: "Salad sayuran segar disiram saus kacang khas yang lezat. Harga: Rp 5.000",
          img: "https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/02/Resep-Gado-Gado.jpg?fit=500%2C479&ssl=1",
        },
        {
          id: "f3",
          name: "Sate",
          desc: "Potongan daging ayam atau sapi yang dibakar sempurna. Harga: Rp 5.000",
          img: "https://cdn0-production-images-kly.akamaized.net/qBRgx5DltYZawCppxwIdtfgXYjw=/0x475:667x851/1360x766/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3261345/original/097830600_1602132749-shutterstock_1777437026.jpg",
        },
        {
          id: "f4",
          name: "Nasi Dagang",
          desc: "Nasi gurih dengan pilihan lauk Ikan/Ayam/Tamban. Harga: Rp 5.000",
          img: "https://asset-2.tstatic.net/tribunnews/foto/bank/images/nasi-lemak-menu-sarapan-khas-yang-populer-di-malaysia.jpg",
        },
      ],
      makananUtama: [
        {
          id: "f5",
          name: "Ayam Penyet",
          desc: "Ayam goreng empuk disajikan dengan sambal pedas mantap. Harga: Rp 25.000",
          img: "https://www.primarasa.co.id/images/images/Resep%20Ayam%20Penyet.jpg",
        },
        {
          id: "f6",
          name: "Nasi Goreng",
          desc: "Nasi goreng spesial khas Pulau Benan. Harga: Rp 15.000",
          img: "https://asset.kompas.com/crops/VMupLYa-zBYTf5h5GnEjMW6-Nxg=/0x0:1000x667/1200x800/data/photo/2020/11/22/5fba747cef43d.jpg",
        },
        {
          id: "f7",
          name: "Mie Goreng",
          desc: "Mie goreng lezat dengan bumbu tradisional. Harga: Rp 15.000",
          img: "https://akcdn.detik.net.id/community/media/visual/2022/07/06/resep-bakmi-goreng-kampung_43.jpeg?w=700&q=90",
        },
        {
          id: "f8",
          name: "Kwetiau Goreng",
          desc: "Kwetiau goreng seafood yang menggugah selera. Harga: Rp 15.000",
          img: "https://cdn1-production-images-kly.akamaized.net/7OcBacRqqxQOU_pz7hZKXiHMArQ=/1360x766/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2472241/original/056558600_1543289153-resep-kwetiau-goreng-spesial.jpg",
        },
      ],
      preOrder: [
        {
          id: "f9",
          name: "Gonggong (Pre-Order)",
          desc: "Disajikan segar langsung dari laut dengan sambal pedas manis. Harga: Rp 30.000",
          img: "https://image.idntimes.com/post/20180111/gonggong-8f9604e4729d28a98e38323bda8bf76c.jpg?tr=w-1920,f-webp,q-75&width=1920&format=webp&quality=75",
        },
        {
          id: "f10",
          name: "Ikan Bakar (Pre-Order)",
          desc: "Ikan segar pilihan yang dibakar dengan bumbu khas. Harga: Rp 30.000",
          img: "https://akcdn.detik.net.id/community/media/visual/2022/04/20/resep-gurame-bakar-bumbu-kecap-cabe_43.jpeg?w=700&q=90",
        },
        {
          id: "f11",
          name: "Cumi Masak Hitam (Pre-Order)",
          desc: "Cumi segar dimasak dengan tinta hitamnya yang gurih. Harga: Rp 30.000",
          img: "https://rakyatsulsel.fajar.co.id/wp-content/uploads/2024/04/30352-sajian-masakan-cumi-hitam-youtubedapur-sherly.jpg",
        },
        {
          id: "f12",
          name: "Capcay (Pre-Order)",
          desc: "Tumisan aneka sayuran segar dan seafood. Harga: Rp 20.000",
          img: "https://radarmukomuko.bacakoran.co/upload/20ed47cb51575370aad8566d8786a1da.jpg",
        },
        {
          id: "f13",
          name: "Asam Pedas (Pre-Order)",
          desc: "Ikan segar dalam kuah asam pedas yang kaya rempah. Harga: Rp 30.000",
          img: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/24C8D260-834C-4DB2-B3FC-CB48B7370ECD/Derivates/d761c133-58ad-44a5-8628-8ccd27e6af30.jpg",
        },
      ],
    },
    drink: [
      {
        id: "d1",
        name: "Air Mineral",
        desc: "Air minum kemasan yang menyegarkan. Harga: Rp 4.000",
        img: "https://www.saka.co.id/web/images/news_article/2023-02-07-081709.jpg",
      },
      {
        id: "d2",
        name: "Air Kelapa",
        desc: "Air kelapa muda segar, langsung dari buahnya. Harga: Rp 10.000",
        img: "https://akcdn.detik.net.id/community/media/visual/2021/11/05/meski-dari-kelapa-air-kelapa-dan-santan-punya-khasiat-sehat-yang-berbeda-2.jpeg?w=700&q=90",
      },
      {
        id: "d3",
        name: "Jus Buah",
        desc: "Pilihan jus buah segar sesuai musim. Harga: Rp 6.000",
        img: "https://static.honestdocs.id/system/blog_articles/main_hero_images/000/004/357/original/iStock-453010753_%281%29.jpg",
      },
      {
        id: "d4",
        name: "Pop Ice",
        desc: "Minuman blender aneka rasa yang disukai semua. Harga: Rp 6.000",
        img: "https://i.pinimg.com/736x/2c/51/48/2c51489d41ad97b152dd514f84d58f8f.jpg",
      },
      {
        id: "d5",
        name: "Teh O",
        desc: "Teh panas tanpa gula, disajikan hangat. Harga: Rp 5.000",
        img: "https://linisehat.com/wp-content/uploads/2020/12/hojicha-2-e1609211392952.jpeg",
      },
      {
        id: "d6",
        name: "Es Teh",
        desc: "Teh manis dingin yang menyegarkan dahaga. Harga: Rp 7.000",
        img: "https://dietpartner.id/wp-content/uploads/2025/01/es-teh.png",
      },
      {
        id: "d7",
        name: "Kopi O",
        desc: "Kopi hitam panas tanpa gula. Harga: Rp 5.000",
        img: "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/68090660-5cb5-409d-9e45-1cc55a9f3996_Go-Biz_20210702_014014.jpeg",
      },
    ],
    transport: [
      {
        id: "t1",
        name: "Caesar Mawan (Trip)",
        desc: "1 trip untuk 6 orang. Harga: Rp 25.000",
        img: "https://sikumis.com/media/frontend/products/400x400/Triseda_RX.png",
      },
      {
        id: "t2",
        name: "Sewa Motor",
        desc: "Sewa harian untuk kebebasan berkeliling pulau. Harga: Rp 50.000 - Rp 100.000",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXJsZd1gABnpqAT8sPmQA5V1-_tu1saPzTw&s",
      },
      {
        id: "t3",
        name: "Transportasi Laut (Memancing)",
        desc: "Sewa perahu untuk pengalaman memancing 1 malam. Harga: Rp 400.000",
        img: "https://meutiaranews.co/wp-content/uploads/2022/12/pompong.jpeg",
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
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbPuZ8x6j08i_7m8oBdhSS585M8jyJVSCDUxcjrCle8zH6-3iEtjf5UH5L6iPBhW_BPAC6vkQediGpTlR28oLXORUyQCjBk6Vi642Mq4gsM6jiJmIu5atEdjyV_1FjawAwwQ98YxhG0dM/s1600/1505552094120.jpg",
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
        img: "https://assets.promediateknologi.id/crop/72x54:648x487/0x0/webp/photo/p3/93/2025/04/19/Sd273163ca15448b390b1265b652b319aT_720x720q80-2745647983.jpg",
      },
      {
        id: "s2",
        name: "Ikan Asin",
        desc: "Ikan segar yang diolah secara tradisional. Harga: Rp 15.000",
        img: "https://i0.wp.com/haluansultra.id/wp-content/uploads/2024/11/Ikan.jpg?resize=768%2C388&ssl=1",
      },
      {
        id: "s3",
        name: "Otak-otak",
        desc: "Otak-otak ikan bakar dengan bumbu khas. Harga: Rp 30.000",
        img: "https://asset-2.tstatic.net/tribunbatamtravel/foto/bank/images/otak-otak.jpg",
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
        img: "https://www.tempatwisata.pro/media/uploads/3082/b4cef29f7e2a2104a1e4fbcfc0c9a8dd.jpg",
      },
      {
        id: "g2",
        title: "Dermaga Senja",
        img: "https://akcdn.detik.net.id/community/media/visual/2021/02/04/dev-senja-istimewa-di-pulau-benan.jpeg?w=700&q=90",
      },
      {
        id: "g3",
        title: "Hutan Bakau",
        img: "https://placehold.co/500x800/ec4899/white?text=Hutan+Bakau",
      },
      {
        id: "g4",
        title: "Kehidupan Bawah Laut",
        img: "https://asset-2.tstatic.net/batam/foto/bank/images/ilustrasi-pengibaran-merah-putih-didasar-laut_20150811_191101.jpg",
      },
      {
        id: "g5",
        title: "Perkampungan Nelayan",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4JuqLXjQB5jwJ-AEsyUA9D8oSDQeQyonzXM1xJ3_tQWyKnUADYgX_ezgpXootxM4wImRkjxL8GWYAUbo6fRlaQ0dNPdVB7F2-EMzU54LVZhCrEy-Z3osXJhXTu3Q7Bpz9vXWEIR2Yeg/s1600/IMG_1255.JPG",
      },
      {
        id: "g6",
        title: "Matahari Terbenam",
        img: "https://www.hariankepri.com/wp-content/uploads/2021/09/IMG-20210928-WA0093.jpg",
      },
    ],
  },
};
