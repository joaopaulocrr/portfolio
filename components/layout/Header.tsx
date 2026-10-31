import Link from "next/link"
import Container from "../ui/Container"
import Image from "next/image"
import { MoveRight } from "lucide-react"
import MenuMobile from "./MenuMobile"

const Header = () => {
  return (
    <header className="w-full sticky bg-black top-0 py-5">
        <Container>
            
            <div className="flex justify-between items-center">

                <Link href= "#inicio"  aria-label="Ir para o inicio">
                    <Image
                    src="/JP.png"
                    alt="Logo João Paulo"
                    width={70}
                    height={70}
                    priority
                    className="w-auto h-auto"
                    />
                </Link>

                <MenuMobile />

                <nav className="hidden md:flex items-center gap-12 font-bold" aria-label="Principal">
                    <Link href="#inicio" className="hover:text-destak transition-colors"> 
                        Início
                    </Link>
                    <Link href="#sobre" className="hover:text-destak transition-colors"> 
                        Sobre
                    </Link>
                    <Link href="#projetos" className="hover:text-destak transition-colors">
                        Projetos
                    </Link>
                    <Link href="#tecnologias" className="hover:text-destak transition-colors"> 
                        Tecnologias
                    </Link>
                    <Link href="#contatos" className="hover:text-destak transition-colors">
                    Contatos
                    </Link>
                </nav>

                <div className="hidden lg:flex">
                    <button className="flex items-center gap-2 text-destak font-bold px-4 py-2 border rounded-full cursor-pointer ">
                        Vamos conversar
                        <MoveRight className="text-destak"/>
                    </button>
                </div>

            </div>

        </Container>
    </header>
  )
}

export default Header