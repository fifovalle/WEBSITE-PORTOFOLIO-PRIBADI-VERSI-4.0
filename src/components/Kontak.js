// MODUL REACT
import React from "react";
// MODUL FRAMER MOTION
import { motion } from "framer-motion";
// UTILS SAYA
import { Muncul } from "../utils/Pariasi";

const Kontak = () => {
  return (
    <section className="py-6 lg:section mb-52 lg:mb-20" id="kontak">
      <div className="xl:container lg:container md:container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* TULISAN */}
          <motion.div
            variants={Muncul("right", 0.3)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Hubungi Saya
              </h4>
              <h2 className="text-[45px] lg:text-[60px] leading-none mb-12">
                Mari Bekerja Sama!
              </h2>
            </div>
          </motion.div>
          {/* FORMULIR */}
          <motion.form
            variants={Muncul("left", 0.3)}
            initial="hilang"
            whileInView={"ada"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Masukan Nama Lengkap Anda"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Masukan Email Anda"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Masukan Pesan Anda"
            ></textarea>
            <button className="btn btn-lg">Kirim Pesan</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
