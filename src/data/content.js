import audioFile from "../assets/bergema.m4a";
import heroBgUrl from "../assets/wedding_hero_bg.png";
import gallery1Url from "../assets/gallery_1.png";
import gallery2Url from "../assets/gallery_2.png";
import gallery3Url from "../assets/gallery_3.png";
import gallery4Url from "../assets/gallery_4.png";
import gallery5Url from "../assets/gallery_5.png";
import gallery6Url from "../assets/gallery_6.png";

export const content = {
  hero: {
    title: "Ivan & Jennifer",
    subtitle: "Akad Nikah",
    date: "Minggu, 24 Mei 2026",
    backgroundImage: heroBgUrl,
    ctaText: "Simpan Tanggal",
  },
  couple: {
    title: "Pasangan Bahagia",
    subtitle:
      "Dengan memohon Ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami",
    groom: {
      name: "Ivan",
      role: "Mempelai Pria",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      bio: "Putra dari Bpk. John Doe & Ibu Jane Doe.",
      quote:
        '"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya."',
    },
    bride: {
      name: "Jennifer",
      role: "Mempelai Wanita",
      image:
        "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      bio: "Putri dari Bpk. Smith & Ibu Smith.",
      quote: '"Semoga menjadi keluarga Sajinah, Mawaddah, Warahmah."',
    },
  },
  event: {
    title: "Acara Pernikahan",
    subtitle: "Bergabunglah di hari bahagia kami",
    ceremony: {
      title: "Akad Nikah",
      time: "08:00 WIB - 10:00 WIB",
      date: "Minggu, 24 Mei 2026",
      location: "Grand Ballroom Hotel",
    },
    reception: {
      title: "Resepsi Pernikahan",
      time: "11:00 WIB - 14:00 WIB",
      date: "Minggu, 24 Mei 2026",
      location: "Grand Ballroom Hotel",
    },
  },
  gallery: {
    title: "Momen Kami",
    subtitle: "Potret perjalanan cinta kami",
    images: [
      gallery1Url,
      gallery2Url,
      gallery3Url,
      gallery4Url,
      gallery5Url,
      gallery6Url,
    ],
  },
  map: {
    title: "Lokasi",
    subtitle: "Peta menuju lokasi acara",
    googleMapsUrl: "https://goo.gl/maps/genericIdentifier",
    buttonText: "Buka Google Maps",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126939.5898687702!2d106.76307374999999!3d-6.148192000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e9114d7a1d%3A0x6d11d10ad69de2a1!2sJakarta%2C%20Special%20Capital%20Region%20of%20Jakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
  },
  rsvp: {
    title: "Konfirmasi Kehadiran",
    subtitle: "Mohon konfirmasi kehadiran Anda",
    thankYouTitle: "Terima Kasih!",
    thankYouMessage: "Konfirmasi Anda telah kami terima.",
    buttonText: "Kirim Konfirmasi",
  },
  footer: {
    branding: "Ivan & Jennifer",
    message: "Terima kasih telah menjadi bagian dari perjalanan kami.",
    copyright: "© 2026. Dibuat dengan penuh cinta.",
  },
  audio: {
    url: audioFile,
    prompt: {
      title: "Selamat Datang",
      message: "Kami memutar musik spesial untuk menemani Anda.",
      buttonText: "Buka Undangan",
    },
  },
  wishes: {
    title: "Ucapan & Doa",
    subtitle: "Kirimkan pesan untuk kedua mempelai",
    formTitle: "Kirim Ucapan",
    placeholders: {
      name: "Nama Anda",
      message: "Pesan Anda",
    },
    buttonText: "Kirim Pesan",
    initialWishes: [
      {
        id: 1,
        name: "Alice & Bob",
        message: "Selamat menempuh hidup baru! Semoga bahagia selalu.",
        date: "2 menit yang lalu",
      },
      {
        id: 2,
        name: "Charlie",
        message:
          "Turut berbahagia untuk kalian berdua! Ditunggu makan-makannya.",
        date: "1 jam yang lalu",
      },
      {
        id: 3,
        name: "Diana",
        message: "Semoga cintanya tumbuh subur setiap hari.",
        date: "3 jam yang lalu",
      },
    ],
  },
};
