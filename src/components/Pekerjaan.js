// MODUL REACT
import React from "react";
// MODUL FRAMER MOTION
import { motion } from "framer-motion";
// UTILS SAYA
import { Muncul } from "../utils/Pariasi";
// GAMBAR SAYA
import Proyek1 from "../assets/Proyek1.png";
import Proyek2 from "../assets/Proyek2.png";
import Proyek3 from "../assets/Proyek3.png";

const Pekerjaan = () => {
  return (
    <section className="section" id="pekerjaan">
      <div className="xl:container lg:container md:container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={Muncul("right", 0.3)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* TULISAN */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                Proyek Terakhir <br />
              </h2>
              <p className="max-w-sm mb-16">
                Untuk kalian yang kepo dengan hasil proyek proyek saya bisa
                kunjungi saja github ya...., dan juga jika kalian semua berniat
                untuk bekerja sama bisa kontak saya lewat chat whatsapp atau
                dengan kontak di bawah.
              </p>
              <a
                href="https://github.com/fifovalle"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-sm">Lihat Semua Proyeknya</button>
              </a>
            </div>
            {/* GAMBAR */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* HAMPARAN */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* PROYEK 1 */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Proyek1}
                alt="Proyek 1"
              />
              {/* ALAT YANG DI GUNAKAN */}
              <div className="absolute -bottom-full left-12 xl:group-hover:bottom-24 lg:group-hover:bottom-24 md:group-hover:bottom-24 sm:group-hover:bottom-24 smm:group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-gradient">HTML, CSS, JS</span>
              </div>
              {/* JUDUL */}
              <div className="absolute -bottom-full left-12 xl:group-hover:bottom-14 lg:group-hover:bottom-14 md:group-hover:bottom-14 sm:group-hover:bottom-14 smm:group-hover:bottom-7 transition-all duration-700 z-50">
                <span className="text-3xl text-white xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl smm:text-[20px]">
                  Website Portofolio Pribadi
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={Muncul("left", 0.2)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col xl:gap-y-[64px] lg:gap-y-[133px] md:gap-y-[45px] sm:gap-y-[45px] smm:gap-y-[40px]"
          >
            {/* GAMBAR */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* HAMPARAN */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* PROYEK 1 */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Proyek2}
                alt="Proyek 1"
              />
              {/* ALAT YANG DI GUNAKAN */}
              <div className="absolute -bottom-full left-12 xl:group-hover:bottom-24 lg:group-hover:bottom-24 md:group-hover:bottom-24 sm:group-hover:bottom-24 smm:group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-gradient xl:text-3xl lg:text-3xl md:text-3xl sm:text-[20px] smm:text-[15px]">
                  HTML, CSS, JS, Bootstrap
                </span>
              </div>
              {/* JUDUL */}
              <div className="absolute -bottom-full left-12 xl:group-hover:bottom-14 lg:group-hover:bottom-14 md:group-hover:bottom-14 sm:group-hover:bottom-14 smm:group-hover:bottom-7 transition-all duration-700 z-50">
                <span className="text-3xl text-white xl:text-3xl lg:text-3xl md:text-3xl sm:text-[23px] smm:text-[18px]">
                  Website Portofolio Pribadi Versi 2
                </span>
              </div>
            </div>
            {/* GAMBAR */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* HAMPARAN */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* PROYEK 1 */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Proyek3}
                alt="Proyek 1"
              />
              {/* ALAT YANG DI GUNAKAN */}
              <div className="absolute -bottom-full left-12 xl:group-hover:bottom-24 lg:group-hover:bottom-24 md:group-hover:bottom-24 sm:group-hover:bottom-24 smm:group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-gradient xl:text-3xl lg:text-3xl md:text-3xl sm:text-[13px] smm:text-[10px]">
                  React, Styled-Components, Framer Motion
                </span>
              </div>
              {/* JUDUL */}
              <div className="absolute -bottom-full left-12 xl:group-hover:bottom-14 lg:group-hover:bottom-14 md:group-hover:bottom-14 sm:group-hover:bottom-14 smm:group-hover:bottom-7 transition-all duration-700 z-50">
                <span className="text-3xl text-white xl:text-3xl lg:text-3xl md:text-3xl sm:text-[23px] smm:text-[15px]">
                  Website Portofolio Pribadi Versi 3
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pekerjaan;
