// MODUL REACT
import React from "react";
// LOGO
import Logo from "../assets/Logo.png";

const Kepala = () => {
  return (
    <header className="py-8">
      <div className="xl:container lg:container md:container mx-auto">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <a
            href="https://wa.me/+6281223652490"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Logo} alt="Logo" className="w-[100px]" />
          </a>
          {/* TOMBOL */}
          <a
            href="https://wa.me/+6281223652490"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn btn-sm">Tertarik Untuk Kerja Sama</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Kepala;
