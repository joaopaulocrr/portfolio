import { ExternalLink, MoveRight } from "lucide-react"
import Container from "../ui/Container"
import Image from "next/image"

const Projetos = () => {
    return (
        <section className="w-full mb-5" id="projetos">
            <Container>
                <div className="flex flex-col">
                    <p className="text-sm lg:text-2xl text-destak font-bold">/ / PROJETOS</p>
                    <div className="w-full md:flex  md:justify-between items-center py-2">
                        <h2 className="font-bold text-3xl lg:text-4xl py-5 lg:py-1">Projetos em destaque</h2>
                        <a href="#" className="flex items-center w-60 gap-3 md:gap-5 border py-1 px-4 rounded-lg text-destak">Ver todos os projetos
                            <MoveRight />
                        </a>
                    </div>

                    <p className="max-w-120 py-6">
                        Aqui estão alguns projetos que desenvolvi para praticar, mostrar minha evolução e colocar em prática o que aprendo.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">

                        <div className="flex flex-col justify-between p-3 rounded-lg gap-2  border border-gray-800 hover:border-blue-500/40 transition-colors">
                            <Image
                                src={"/modelo.png"}
                                alt="Imagem do projeto"
                                width={300}
                                height={300}
                                className="w-full"
                            />
                            <h3 className="text-xl font-bold">Nome do Projeto</h3>
                            <p>Descrição detalhada do projeto.</p>
                            <div className="flex gap-2 ">
                                <span className="bg-gray-800 py-1 px-2 rounded-full">Javascript</span>
                                <span className="bg-gray-800 py-1 px-2 rounded-full">NextJs</span>
                                <span className="bg-gray-800 py-1 px-2 rounded-full">Typescript</span>
                            </div>
                            <div className="w-full flex justify-between mt-3">
                                <a href="#"  className="flex items-center gap-3 text-destak">
                                    Ver projeto
                                    <MoveRight />
                                </a >

                                <a  href="#" >
                                    <ExternalLink />
                                </a >
                            </div>
                        </div>

                        <div className="flex flex-col justify-between p-3 rounded-lg gap-2  border border-gray-800 hover:border-blue-500/40 transition-colors">
                            <Image
                                src={"/modelo.png"}
                                alt="Imagem do projeto"
                                width={300}
                                height={300}
                                className="w-full"
                            />
                            <h3 className="text-xl font-bold">Nome do Projeto</h3>
                            <p>Descrição detalhada do projeto.</p>
                            <div className="flex gap-2 ">
                                <span className="bg-gray-800 py-1 px-2 rounded-full">Javascript</span>
                                <span className="bg-gray-800 py-1 px-2 rounded-full">NextJs</span>
                                <span className="bg-gray-800 py-1 px-2 rounded-full">Typescript</span>
                            </div>
                            <div className="w-full flex justify-between mt-3">
                                <a href="#" className="flex items-center gap-3 text-destak">
                                    Ver projeto
                                    <MoveRight />
                                </a>

                                <a href="#" >
                                    <ExternalLink />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between p-3 rounded-lg gap-2  border border-gray-800 hover:border-blue-500/40 transition-colors">
                            <Image
                                src={"/modelo.png"}
                                alt="Imagem do projeto"
                                width={300}
                                height={300}
                                className="w-full"
                            />
                            <h3 className="text-xl font-bold">Nome do Projeto</h3>
                            <p>Descrição detalhada do projeto.</p>
                            <div className="flex gap-2 ">
                                <span className="bg-gray-800 py-1 px-2 rounded-full">Javascript</span>
                                <span className="bg-gray-800 py-1 px-2 rounded-full">NextJs</span>
                                <span className="bg-gray-800 py-1 px-2 rounded-full">Typescript</span>
                            </div>
                            <div className="w-full flex justify-between mt-3">
                                <a href="#" className="flex items-center gap-3 text-destak">
                                    Ver projeto
                                    <MoveRight />
                                </a>

                                <a href="#">
                                    <ExternalLink />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </Container>
             <div className=" w-full h-0.5 mt-10 bg-linear-to-r from-transparent via-[#f97416bd] to-transparent opacity-30" />
        </section>
    )
}

export default Projetos