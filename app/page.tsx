'use client';

import Link from "next/link";
import {motion} from 'framer-motion'
import CacauSection from "@/app/components/cacau-section/CacauSection";
import ProductSlide from "@/app/components/product_slide/ProductSlide";
import texts from '@/app/data/texts';
// contém os textos usados no site separados por seções do site ex essência da marca, história etc


export default function Home() {
  return (
    <div className="overflow-x-hidden">

      {/* ===========================
          HERO SECTION
      =========================== */}

      <section className="relative w-full h-screen bg-cacao flex flex-col justify-center items-center p-4">
        {/* Imagem de fundo */}
    

         <video
         src='/cacau.mp4'
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        autoPlay
        muted
        loop
        aria-hidden="true"
      />

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-cacao-dark/80" />

        {/* Conteúdo */}
        <div className="relative h-full z-10 flex flex-col gap-8 justify-center items-center text-center px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6,delay:0.2, ease: 'easeIn' }}
            className={`text-4xl font-bold sm:text-6xl text-beige-dark `}
          >
            O sabor do Brasil em cada pedaço.
          </motion.h1>
          <motion.span initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeIn' }}
              className="font-lg text-beige-light text-lg max-w-3xl drop-shadow-2xl drop-shadow-black">
            Chocolates artesanais feitos com cacau de origem amazônica e baiana — do fruto à emoção.
          </motion.span>

          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeIn' }}
              className="my-4 sm:m-0"
            >
               <Link
              href={"/"}
              className="px-6 py-3 bg-cacao-dark/60 backdrop-blur-sm rounded-full 
             transition-all duration-300 
             text-gold-light 
             border-2 border-gold-light/30 
             hover:bg-cacao-dark/80 hover:border-gold-light/40 hover:font-semibold"
            >
              Descubra nossa história
            </Link>

            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeIn' }}
              className="my-4 sm:m-0"
            > 
            <Link
              href={"/"}
              className="px-6 py-3 bg-cacao-dark/60 backdrop-blur-sm rounded-full 
             transition-all duration-300 
             text-gold-light 
             border-2 border-gold-light/30 
             hover:bg-cacao-dark/80 hover:border-gold-light/40 hover:font-semibold"
            >
              Descubra nossos chocolates
            </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===========================
          NOSSA ESSÊNCIA SECTION
      =========================== */}


      <CacauSection title="Nossa Essência" texts={texts.essencia} imageUrl="/cacau.png" id="essencia" />

       {/* ===========================
          NOSSA HISTÓRIA SECTION
      =========================== */}

      <CacauSection title="Nossa História" texts={texts.historia} backgroundColor="bg-beige-dark" imageUrl="/cacau-cesta.png" id='historia'/>
      {/* ===========================
          SUSTENTABILIDADE SECTION
      =========================== */}


      {/* ===========================
         SLIDE PRODUTOS
      =========================== */}
      <ProductSlide />
      <CacauSection title="Sustentabilidade" texts={texts.sustentabilidade} imageUrl="/cacau_chocolate.png" backgroundColor="bg-leaf-dark" id='sustentabilidade' />

    </div>
  );
}
