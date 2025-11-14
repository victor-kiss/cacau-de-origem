import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

// Inicializa a fonte Playfair Display
const PlayfairDisplay = Playfair_Display({
  weight: ["400", "900"],
  subsets: ["latin"],
});

// Dados dos links (mantidos iguais)
const links = {
  redes_sociais: [
    {
      name: "Instagram",
      url: "/",
      icon: "bi-instagram",
    },
    {
      name: "TikTok",
      url: "/",
      icon: "bi-tiktok",
    },
    {
      name: "Facebook",
      url: "/",
      icon: "bi-facebook",
    },
    {
      name: "LinkedIn",
      url: "/",
      icon: "bi-linkedin",
    },
  ],
  links_rapidos: [
    {
      name: "Nossa História",
      url: "#historia",
    },
    {
      name: "Nossa Essência",
      url: "#essencia",
    },
    {
      name: "Sustentabilidade",
      url: "#sustentabilidade",
    },
    {
      name: "Produtos",
      url: "#produtos",
    },
  ],
};

export default function Footer() {
  return (
    <footer
      className="w-full bg-cacao shadow-xl shadow-cacao-dark"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-7xl mx-auto py-8 px-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center justify-start md:items-start flex-1 min-w-[200px]">
            <Image
              src="/logo_branca.png"
              alt="Cacau de Origem Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-4 flex-1 md:min-w-[200px]">
            <span
              className={`${PlayfairDisplay.className} text-beige-dark font-bold text-3xl mb-1`}
            >
              Redes Sociais
            </span>
            <ul className="space-y-2">
              {links.redes_sociais.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.url}
                    className="text-beige hover:text-beige-dark transition duration-300 flex items-center gap-2"
                  >
                    <i className={`bi ${link.icon} text-lg`}></i>
                    <span className="font-normal">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 flex-1 md:min-w-[200px]">
            <span
              className={`${PlayfairDisplay.className} text-beige-dark font-bold text-3xl mb-1`}
            >
              Links Rápidos
            </span>
            <ul className="space-y-2">
              {links.links_rapidos.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.url}
                    className="text-beige-light hover:text-beige transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-4 bg-cacao-dark w-full flex justify-center items-center ">
        <span className="text-beige-light text-center text-sm">
          Desenvolvido com
          <i
            className="bi bi-heart-fill text-lg align-middle text-red-400 mx-1.5 leading-none"
            aria-hidden="true"
          ></i>
          por{" "}
          <Link
            href={"https://github.com/victor-kiss"} 
            rel="noopener noreferrer"
            target="_blank"
            className="font-semibold text-beige hover:text-beige-dark transition duration-300"
          >
            Victor Kiss
          </Link>
          .
        </span>
      </div>
    </footer>
  );
}