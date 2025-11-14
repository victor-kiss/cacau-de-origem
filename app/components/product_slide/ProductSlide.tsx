"use client";

import cacauOrigemProducts from "@/app/data/products";
import ChocolateWave from "@/app/components/chocolate_wave/ChocolateWave";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProductSlide() {
  const [index, setIndex] = useState(0);

  // Acessa o produto atual
  const product = cacauOrigemProducts.products[index];
  const productsQuantity = cacauOrigemProducts.products.length;

  const nextProduct = () => {
    setIndex(
      (prevIndex) => (prevIndex + 1) % cacauOrigemProducts.products.length
    );
  };

  const prevProduct = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex - 1 + cacauOrigemProducts.products.length) %
        cacauOrigemProducts.products.length
    );
  };

  const goTo = (number: number) => {
    setIndex(number);
  };

  // Definição das variantes de animação
  const slideInRight = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
    transition: { type: "spring", stiffness: 50, ease: "easeIn",delay:0.2 },
  };

  const slideInLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
    transition: { type: "spring", stiffness: 50, ease: "easeIn",delay:0.2 },
  };

  return (
    <section className="bg-cacao text-cacao-dark relative w-full min-h-screen flex flex-col-reverse lg:flex-row sm:gap-8 overflow-hidden">
      <ChocolateWave
        className="w-screen h-auto max-h-24 sm:max-h-80 absolute top-0 left-0"
        color="#2A1E18 "
      />
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={index} 
          className="flex flex-1 w-full md:h-screen flex-col justify-center align-center items-center p-8 gap-12 z-10"
        >
          {/* Título */}
          <motion.h2
            variants={slideInLeft} 
            initial="initial"
            whileInView="animate"
            exit="exit"
            className="text-5xl sm:text-6xl font-bold text-beige-dark max-w-2xl text-center will-change-transform"
          >
            {product.name}
          </motion.h2>

          {/* Descrição */}
          <motion.p
            variants={slideInLeft}
            initial="initial"
           whileInView="animate"
            exit="exit"
            transition={{ type: "spring", stiffness: 50, delay: 0.15 }} // Atraso para efeito cascata
            className="text-beige-light max-w-lg text-center will-change-transform"
          >
            {product.description}
          </motion.p>

          {/* Botão */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
           whileInView="animate"
            exit="exit"
            transition={{ type: "spring", stiffness: 50, delay: 0.3 }} // Atraso para efeito cascata
            className="will-change-transform"
          >
            <Link
              href={""}
              className="px-6 py-3 bg-gold-light rounded-full text-cacao-dark font-bold hover:bg-gold transition-all duration-300  easeInS"
            >
              Conhecer
            </Link>
          </motion.div>

          <motion.div  variants={slideInLeft}
            initial="initial"
           whileInView="animate"
            exit="exit"
            transition={{ type: "spring", stiffness: 50, delay: 0.3 }} 
            className="flex justify-between gap-6 sm:gap-8 items-center mt-4">
            <button
              onClick={() => prevProduct()}
              className="text-3xl font-bold text-beige-dark hover:text-gold-light transition-all duration-300 ease-in-out"
            >
              <i className="bi bi-caret-left-fill"></i>
            </button>

            <div className="flex gap-4">
              {Array.from({ length: productsQuantity }).map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  className={`${
                    dotIndex == index
                      ? "bg-gold transform scale-105"
                      : "bg-beige-light"
                  } w-3 h-3 rounded-full hover:cursor-pointer transition-all duration-200`}
                  onClick={() => goTo(dotIndex)}
                ></div>
              ))}
            </div>
            <button
              onClick={() => nextProduct()}
              className="text-3xl font-bold text-beige-dark hover:text-gold-light transition-all duration-300 ease-in-out"
            >
              <i className="bi bi-caret-right-fill"></i>
            </button>
          </motion.div>
        </motion.div>

        {/* Imagem do Produto */}
        <motion.div
          key={`image-${index}`} 
          variants={slideInRight} 
          initial="initial"
         whileInView="animate"
          exit="exit"
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
          className="w-full flex flex-1 z-10 items-center justify-center will-change-transform"
        >
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={800}
            height={800}
            priority={true}
            quality={75}
            className="object-contain drop-shadow-2xl drop-shadow-black saturate-100"
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}