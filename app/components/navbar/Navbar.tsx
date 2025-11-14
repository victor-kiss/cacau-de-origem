"use client"

import Link from "next/link"
import { useState } from "react"
import { Playfair_Display } from "next/font/google";
import Wave from "@/app/components/chocolate_wave/ChocolateWave";

const playfairDisplay = Playfair_Display({ weight:['900'], subsets: ['latin'] })

export default function Navbar() {

    const [open, setOpen] = useState(false)

    const openNavbar = () => {
        setOpen(!open)
    }

    const closeNavbar = () => { 
        setOpen(false)
    }

    const links = [
        {
            title: 'Início',
            url: '/',
            target: null,
        },
        {
            title: 'Nossa Essência',
            url: '#essencia',
            target: null,
        },
        {
            title: 'Nossa História',
            url: '#historia',
            target: null,

        },
         {
            title: 'Sustentabilidade',
            url: '#sustentabilidade',
            target: null,

        },
    ]
    return (
        <div className="absolute top-0 left-0 z-20 w-full">
            <nav className="w-full h-auto sm:flex items-center sm:justify-center bg-beige gap-8 sm:gap-20 text-white p-2 shadow-lg">

                <div className="flex items-center justify-between">
                    <Link href={'/'} className={`${playfairDisplay.className} text-3xl sm:text-4xl font-bold text-cacao`}>
                        C.D.O   
                    </Link>

                    <div className=" sm:hidden h-full flex items-center">
                        <i className={`bi ${open == false ? 'bi-list ' : 'bi-x'} text-cacao text-3xl duration-300 ease-out p-3 align-middle`}  onClick={() => openNavbar()}></i>
                    </div>
                </div>
                <div className={` ${open == false ? 'hidden' : 'block'} sm:flex flex-col sm:flex-row items-baseline justify-baseline text-gray-300 flex gap-4 sm:gap-8 my-2 sm:my-1 transition duration-300 ease-in-out `}>

                    {
                        links.map((data, i) =>
                           <ul key={i}>
                            <li>
                                <Link href={data.url} target={data.target ? '_blank' : '_self'} className='text-cacao hover:text-gold-dark' onClick={() => closeNavbar()}>
                                    {data.title}
                                </Link>
                            </li>
                           </ul>
                        )
                    }
                    <Link href="#produtos" className="bg-gold text-cacao font-semibold px-5 py-2 rounded-full hover:bg-gold-light transition block">
                        Comprar agora
                    </Link>
                </div>
            </nav>
            {/*SVG para simular chocolate derretido */}
            <Wave className="w-screen h-auto  max-h-8 sm:max-h-16" color="#FBF6EE"/>
        </div>
    )
}