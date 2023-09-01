// MODUL REACT
import React from "react";
import { Link } from "react-scroll";
// UTILS SAYA
import { TautanNavigasi } from "../utils/Data";

const Navigasi = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="xl:container lg:container md:container mx-auto">
        {/* KONTEN NAVIGASI */}
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
          {TautanNavigasi.map((Navigasi, index) => {
            const { tautan, ikon } = Navigasi;
            return (
              <Link
                key={index}
                to={tautan}
                activeClass="active"
                smooth={true}
                spy={true}
                offset={index === 0 ? -200 : 0}
                className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              >
                {ikon}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigasi;
