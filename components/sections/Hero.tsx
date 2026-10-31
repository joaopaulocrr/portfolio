import { Mail, MoveRight } from "lucide-react"
import Container from "../ui/Container"
import Image from "next/image"
import { GitHubIcon, LinkedInIcon } from "../brandIcons/MyIcons"


const Hero = () => {
    return (
        <section className="w-full pt-5 " id="inicio">
            <Container>
                <div className="md:flex   gap-4 lg:gap-20">
                    <div className="flex flex-col justify-around md:flex-1" >
                        <p className="text-sm lg:text-xl text-destak font-bold" >/ / DESENVOLVEDOR FRONTEND</p>
                        <h1 className="font-bold text-4xl lg:text-5xl py-3 lg:py-1">Transformo idéias em experiências
                            <span className="text-destak"> digitais.</span>
                        </h1>
                        <p className="pb-4 lg:text-lg">Sou desenvolvedor frontend em constante evolução, com foco em criar interfaces modernas, performáticas e que realmente fazem a diferença.</p>


                        <div className="grid grid-cols-2 justify-between w-full gap-3 mb-7">
                            <button className="flex flex-1 justify-center items-center gap-1.5 bg-destak text-black font-bold p-2 rounded-lg">Ver Projetos
                                <MoveRight />
                            </button>
                            <button className="flex-1 border rounded-lg p-2 lg:font-bold ">
                                Entrar em contato
                            </button>

                            <div className="flex justify-around my-5">

                                <a
                                    href="https://www.linkedin.com/in/dev-joao-paulo/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LinkedInIcon className="w-6 h-6 lg:w-10 lg:h-10" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/dev-joao-paulo/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GitHubIcon className="w-6 h-6 lg:w-10 lg:h-10" />
                                </a>

                                <a
                                    href=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Mail className="lg:w-10 lg:h-10" />
                                </a>

                            </div>

                        </div>


                    </div>

                    
                    <div className=" md:flex-1">
                       
                        <Image
                            src="/perfil.png"
                            alt="Minha foto de apresentação"
                            width={400}
                            height={300}
                            className="mx-auto rounded md:rounded-full object-cover h-auto w-full "
                        />

                    </div>
                </div>
            </Container>
            <div className=" w-full h-0.5 mt-10 bg-linear-to-r from-transparent via-[#f97416bd] to-transparent opacity-30" />

        </section>
    )
}

export default Hero