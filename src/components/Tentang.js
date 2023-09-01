// MODUL REACT
import React from "react";
import Penghitung from "react-countup";
import { useInView } from "react-intersection-observer";
// MODUL FRAMER MOTION
import { motion } from "framer-motion";
// UTILS SAYA
import { Muncul } from "../utils/Pariasi";

const Tentang = () => {
  const [referensi, ketikaDiLihat] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="tentang" ref={referensi}>
      <div className="xl:container lg:container md:container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* GAMBAR */}
          <motion.div
            variants={Muncul("right", 0.3)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[800px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* TULISAN */}
          <motion.div
            variants={Muncul("left", 0.5)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">Tentang Saya</h2>
            <h3 className="h3 mb-4">
              Saya Seorang Web Developer Sudah Berkecimpung Sejak Tahun 2018
            </h3>
            <p className="mb-6">
              Saya sudah 5 tahun berkecimpung di dunia programming ini dengan
              adanya portofolio ini saya ingin memperkenalkan diri saya kepada
              kalian semua. dan saya juga disini masih belajar untuk mencari
              ilmu programming, yang saya pelajari sekarang ialah{" "}
              <span className="text-accent">Next.js</span> tapi jika kalian
              ingin bekerja sama dengan saya bisa kok klik saja tombol di bawah
              ya...
            </p>
            {/* STATUS */}
            <div className="flex gap-x-6 smm:gap-x-2 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {ketikaDiLihat ? (
                    <Penghitung start={0} end={5} duration={3} />
                  ) : null}
                </div>
                <div className="font-primary text-sm  sm:text-[10px] smm:text-[10px] md:text-[15px] tracking-[2px]">
                  Tahun <br /> Mempelajari Web Develoment
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {ketikaDiLihat ? (
                    <Penghitung start={0} end={4} duration={3} />
                  ) : null}
                </div>
                <div className="font-primary text-sm md:text-[15px] sm:text-[10px] smm:text-[10px] tracking-[2px]">
                  Proyek <br /> Terselesaikan
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {ketikaDiLihat ? (
                    <Penghitung start={0} end={1} duration={3} />
                  ) : null}
                </div>
                <div className="font-primary sm:text-[10px] smm:text-[10px] md:text-[15px] text-sm tracking-[2px]">
                  Pelanggan <br /> Puas
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Kontak Saya</button>
              <a href="#" className="text-gradient btn-link">
                Proyek Saya
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
