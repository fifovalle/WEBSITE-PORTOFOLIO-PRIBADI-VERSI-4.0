// MODUL REACT
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
// MODUL FRAMER MOTION
import { motion } from "framer-motion";
// UTILS SAYA
import { Muncul } from "../utils/Pariasi";
import { LayananSaya } from "../utils/Data";

const Layanan = () => {
  return (
    <section className="section" id="layanan">
      <div className="xl:container lg:container md:container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-5">
          {/* TULISAN & GAMBAR */}
          <motion.div
            variants={Muncul("right", 0.3)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">Apa Yang Saya Lakukan?</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Saya Seorang Web Developer Sudah Berkecimpung Sejak Tahun 2018
            </h3>
            <button className="btn btn-sm">Lihat Pekerjaan Saya</button>
          </motion.div>
          {/* LAYANAN */}
          <motion.div
            variants={Muncul("left", 0.5)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* DAFTAR LAYANAN */}
            <div>
              {LayananSaya.map((layanan, index) => {
                const { nama, deskripsi, tautan } = layanan;
                return (
                  <div
                    key={index}
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {nama}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {deskripsi}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {tautan}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Layanan;
