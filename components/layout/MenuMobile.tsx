'use client'

import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"


const MenuMobile = () => {

    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => {
        setIsOpen(false);
  };


    return (
        <div className="relative md:hidden">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isOpen}
                aria-controls="menu-mobile"
            >

                {isOpen ? <X /> : <Menu />}
            </button>

            {isOpen &&
                <nav
                id="menu-mobile"
                aria-label="Navegação principal mobile"
                 className="flex flex-col gap-3 p-4 font-bold bg-orange-600 rounded-lg border-white absolute right-0 top-full z-50 shadow-lg" 

                >
                    <Link href="#inicio" onClick={closeMenu} className="hover:text-black transition-colors">
                        Início
                    </Link>
                    <Link href="#sobre" onClick={closeMenu} className="hover:text-black transition-colors">
                        Sobre
                    </Link>
                    <Link href="#projetos" onClick={closeMenu} className="hover:text-black transition-colors">
                        Projetos
                    </Link>
                    <Link href="#tecnologias" onClick={closeMenu} className="hover:text-black transition-colors">
                        Tecnologias
                    </Link>
                    <Link href="#contatos" onClick={closeMenu} className="hover:text-black transition-colors">
                        Contatos
                    </Link>
                </nav>
            }

        </div>
    )
}

export default MenuMobile