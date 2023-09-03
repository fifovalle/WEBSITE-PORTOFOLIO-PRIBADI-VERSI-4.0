// MODUL REACT
import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";
// KOMPONEN SAYA
import Beranda from "./components/Beranda";
import Kepala from "./components/Kepala";
import Navigasi from "./components/Navigasi";
import Tentang from "./components/Tentang";
import Layanan from "./components/Layanan";
import Pekerjaan from "./components/Pekerjaan";
import Kontak from "./components/Kontak";

const mengesampingkan = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Aplikasi = () => {
  const [apakahMemuat, setApakahMemuat] = useState(true);

  useEffect(() => {
    function downloadData() {
      setTimeout(() => {
        setApakahMemuat(false);
      }, 3000);
    }

    downloadData();
  }, []);

  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden scrollbar scrollbar-thumb-customScrollbar scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full min-h-screen">
      {apakahMemuat ? (
        <div className="flex items-center justify-center min-h-screen">
          <HashLoader
            color={"#B809C3"}
            loading={apakahMemuat}
            css={mengesampingkan}
            size={200}
          />
        </div>
      ) : (
        <>
          <Kepala />
          <Beranda />
          <Navigasi />
          <Tentang />
          <Layanan />
          <Pekerjaan />
          <Kontak />
        </>
      )}
    </div>
  );
};

export default Aplikasi;
