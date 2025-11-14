import React from 'react';

/**
 * Componente que renderiza uma onda SVG, ideal para separar seções
 * e simular a forma de chocolate derretido ou um divisor suave.
 *
 * @param {object} props
 * @param {string} props.className - Classes Tailwind CSS para controlar o tamanho e posicionamento (ex: "w-full h-16 absolute bottom-0").
 * @param {string} props.color - Cor do preenchimento da onda (ex: "text-cacao" ou "text-beige-dark").
 * @returns {JSX.Element} O componente SVG da onda.
 */
export default function ChocolateWave({ className = "", color = "currentColor" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className={className}
            preserveAspectRatio="none"
        >
            {/* O "fill" é definido pela prop 'color' ou usa 'currentColor' para herdar a cor do Tailwind */}
            <path fill={color} fillOpacity="1" d="M0,64L15,85.3C30,107,60,149,90,181.3C120,213,150,235,180,245.3C210,256,240,256,270,224C300,192,330,128,360,106.7C390,85,420,107,450,128C480,149,510,171,540,197.3C570,224,600,256,630,266.7C660,277,690,267,720,229.3C750,192,780,128,810,101.3C840,75,870,85,900,128C930,171,960,245,990,256C1020,267,1050,213,1080,176C1110,139,1140,117,1170,133.3C1200,149,1230,203,1260,229.3C1290,256,1320,256,1350,261.3C1380,267,1410,277,1425,282.7L1440,288L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"></path>
        </svg>
    );
}