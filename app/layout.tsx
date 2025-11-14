import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import dynamic from "next/dynamic";


const PoppinsFont = Poppins({
  weight:['300','500','700'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Cacau de Origem",
  description: "Cacau de Origem — Chocolates artesanais feitos com cacau brasileiro de origem sustentável, unindo tradição, sabor e respeito à natureza.",
  authors:[{name:'victor kiss',url:'https://github.com/victor-kiss'}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const Navbar = dynamic(() => import('@/app/components/navbar/Navbar'))
  const Footer = dynamic(() => import('@/app/components/footer/Footer'))
  
  return (
    <html lang="pt-br">
      <body
        className={`${PoppinsFont.className} antialiased overflow-x-hidden`}
      >
        <Navbar/>
        {children}

        <Footer/>
      </body>
    </html>
  );
}
