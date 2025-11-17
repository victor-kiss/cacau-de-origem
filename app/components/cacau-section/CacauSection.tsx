"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import { HtmlHTMLAttributes } from "react";

interface CacauSectionProps {
  title: string;
  texts: string[];
  backgroundColor?: string;
  imageUrl?: string;
  videoUrl?: string;
}
export default function CacauSection({
  title,
  texts,
  backgroundColor,
  imageUrl,
  videoUrl,
  ...props
}:HtmlHTMLAttributes<HTMLElement> & CacauSectionProps) {

   const isdark =
     backgroundColor === 'bg-cacao-dark' ||
     backgroundColor === 'bg-cacao' ||
     backgroundColor === 'bg-leaf-dark';
     
     const items = {title, texts, backgroundColor, imageUrl, videoUrl};

     if(!items){
      window.alert('uiui')
     }
  return (
    <section
      className={`${
        backgroundColor ? backgroundColor : "bg-beige-light"
      } sm:min-h-screen  p-8 flex flex-col-reverse lg:flex-row items-center justify-center gap-12`}
     {...props}>
 
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl z-10">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type:'spring', stiffness:50, delay: 0.1, ease: "easeIn" }}
          className={`text-4xl sm:text-6xl font-bold ${isdark  ? 'text-gold-light' : 'text-leaf-dark'} mb-6 will-change-transform`}
        >
          {title}
        </motion.h2>

        {texts.map((text, i) => (
          <motion.p
            key={i}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type:'spring', delay: i * 0.1, ease: "easeIn" }}
            className={`${isdark ? 'text-beige' : 'text-cacao-dark'}  leading-relaxed xl:text-lg mb-4 will-change-transform`}
          >
            {text}
          </motion.p>
        ))}
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
        className="relative flex-1 flex flex-col justify-center items-center align-center w-full h-[300px] sm:h-[450px] lg:h-[550px] max-w-2xl will-change-transform"
      >
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="cacau"
            width={800}
            height={800}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className=" hover:scale-105 transition-transform duration-500 object-contain"
            priority={true}
            quality={50}
          />
        )}
        {videoUrl && (
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg drop-shadow-xl drop-shadow-cacao-dark/50"
            
          />
        )}
      </motion.div>
    </section>
  );
}
