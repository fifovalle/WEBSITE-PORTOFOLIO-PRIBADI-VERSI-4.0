// MODUL REACT
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
// GAMBAR
import Gambar from "../assets/1.png";
import Gambar2 from "../assets/Gambar2.png";
import Gambar3 from "../assets/Gambar3.png";
import GambarPartikel from "../assets/Partikel.png";
// MODUL FRAMER MOTION
import { AnimatePresence, motion } from "framer-motion";
// UTILS SAYA
import { Muncul } from "../utils/Pariasi";
import { TautanSosialMedia } from "../utils/Data";

const gambar = [Gambar, Gambar2, Gambar3];

const transisi = {
  duration: 0.5,
  ease: "easeInOut",
};

const Beranda = () => {
  const [indexBaru, setindexBaru] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setindexBaru((Lihat) => (Lihat + 1) % gambar.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="beranda"
    >
      <div className="xl:container lg:container md:container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* TULISAN */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={Muncul("up", 0.3)}
              initial="hilang"
              whileInView={"ada"}
              viewport={{ once: false, amount: 0.7 }}
              className="md:text-[120px] sm:text-[70px] smm:text-[50px] font-bold leading-[0.8] xl:text-[110px] lg:text-[85px]"
            >
              NAUFAL <span>FIFA</span>
            </motion.h1>
            <motion.div
              variants={Muncul("up", 0.4)}
              initial="hilang"
              whileInView={"ada"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 sm:text-[25px] smm:text-[20px] md:text-[45px] xl:text-[48px] 
              lg:text-[33px] sm:text-[27px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-2">Saya Seorang</span>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Mahasiswa",
                  2000,
                  "Freelancer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={Muncul("up", 0.5)}
              initial="hilang"
              whileInView={"ada"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 md:max-w-[1000px]"
            >
              Saya seorang web developer yang bekerja di bagian{" "}
              <span className="text-accent">client side</span> atau biasa
              dikenal sebagai <span className="text-accent">front end</span>,
              kini saya sedang mempelajari{" "}
              <span className="text-accent">next.js</span> framework dari{" "}
              <span className="text-accent">react </span>
              atau framework <span className="text-accent">fullstack</span> agar
              bisa menghandle keduanya yaitu{" "}
              <span className="text-accent"> client side</span> dan{" "}
              <span className="text-accent">server side</span> atau biasa
              dikenal sebagai <span className="text-accent">back end</span>
            </motion.p>
            <motion.div
              variants={Muncul("up", 0.6)}
              initial="hilang"
              whileInView={"ada"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Kontak Saya</button>
              <a href="#" className="text-gradient btn-link">
                Proyek Saya
              </a>
            </motion.div>
            {/* SOSIAL MEDIA */}
            <motion.div
              variants={Muncul("up", 0.7)}
              initial="hilang"
              whileInView={"ada"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              {TautanSosialMedia.map((SosialMedia, index) => {
                const { tautan, ikon } = SosialMedia;
                return (
                  <a
                    key={index}
                    href={tautan}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent"
                  >
                    {ikon}
                  </a>
                );
              })}
            </motion.div>
          </div>
          {/* GAMBAR */}
          <motion.div
            variants={Muncul("down", 0.5)}
            initial="hilang"
            whileInView={"ada"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] relative"
          >
            <AnimatePresence exitBeforeEnter>
              <motion.img
                key={indexBaru}
                src={gambar[indexBaru]}
                alt="Gambar Saya"
                className="rounded-full"
                initial={{ opacity: 0 }} // Opacity awal saat gambar baru muncul
                animate={{ opacity: 1 }} // Opacity animasi saat gambar muncul
                exit={{ opacity: 0 }} // Opacity saat gambar keluar
                transition={transisi}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </AnimatePresence>
            <motion.img
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.5, 1],
              }}
              transition={{ duration: 20, repeat: Infinity }}
              src={GambarPartikel}
              alt="Partikel"
              className="absolute bottom-[-30px] left-[-150px] w-[200px]"
            />
            <motion.img
              animate={{
                y: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.8, 1],
              }}
              transition={{ duration: 18, repeat: Infinity }}
              src={GambarPartikel}
              alt="Partikel"
              className="absolute top-[-90px] right-[-150px] w-[250px]"
            />
            <motion.img
              animate={{
                x: [0, -100, 0],
                rotate: 360,
                scale: [1, 0.9, 1],
              }}
              transition={{ duration: 15, repeat: Infinity }}
              src={GambarPartikel}
              alt="Partikel"
              className="absolute top-[-150px] left-[-150px] w-[250px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Beranda;
