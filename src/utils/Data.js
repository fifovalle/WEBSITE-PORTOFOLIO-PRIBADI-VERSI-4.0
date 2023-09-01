// MODUL REACT
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

export const TautanNavigasi = [
  {
    id: 0,
    nama: "Beranda",
    ikon: <BiHomeAlt />,
    tautan: "beranda",
  },
  {
    id: 1,
    nama: "Tentang",
    ikon: <BiUser />,
    tautan: "tentang",
  },
  {
    id: 2,
    nama: "Layanan",
    ikon: <BsClipboardData />,
    tautan: "layanan",
  },
  {
    id: 3,
    nama: "Pekerjaan",
    ikon: <BsBriefcase />,
    tautan: "pekerjaan",
  },
  {
    id: 4,
    nama: "Kontak",
    ikon: <BsChatSquareText />,
    tautan: "kontak",
  },
];

export const TautanSosialMedia = [
  {
    id: 0,
    nama: "Github",
    ikon: <FaGithub />,
    tautan: "https://github.com/fifovalle",
  },
  {
    id: 1,
    nama: "Instagram",
    ikon: <FaInstagram />,
    tautan: "https://www.instagram.com/fif_ovalle",
  },
  {
    id: 2,
    nama: "Whatsapp",
    ikon: <FaWhatsapp />,
    tautan: "https://wa.me/+6281223652490",
  },
];

export const LayananSaya = [
  {
    id: 0,
    nama: "Web Design",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi sequi quas? Labore harum expedita consequatur eligendi.",
    tautan: "Lihat Detail",
  },
  {
    id: 1,
    nama: "Web Development",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi sequi quas? Labore harum expedita consequatur eligendi.",
    tautan: "Lihat Detail",
  },
  {
    id: 2,
    nama: "Solved Problems",
    deskripsi:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi sequi quas? Labore harum expedita consequatur eligendi.",
    tautan: "Lihat Detail",
  },
];
