// MODUL REACT
import React from "react";
// KOMPONEN SAYA
import Beranda from "./components/Beranda";
import Kepala from "./components/Kepala";
import Navigasi from "./components/Navigasi";
import Tentang from "./components/Tentang";
import Layanan from "./components/Layanan";
import Pekerjaan from "./components/Pekerjaan";
import Kontak from "./components/Kontak";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden scrollbar scrollbar-thumb-customScrollbar scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <Kepala />
      <Beranda />
      <Navigasi />
      <Tentang />
      <Layanan />
      <Pekerjaan />
      <Kontak />
    </div>
  );
};

export default App;
