import { SiCss, SiFigma, SiGit, SiGithub, SiHtml5, SiJavascript, SiNextcloud, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si"
import Container from "../ui/Container"

const Tecnologias = () => {
    return (
        <section id="tecnologias" className="w-full mb-10">
            <Container>
                <p className="text-sm lg:text-xl text-destak font-bold" >/ / Tecnologias</p>
                <div className="lg:flex  gap-2 md:gap-6 lg:gap-10">
                    <div className="flex-1">
                        <h2 className="font-bold text-4xl lg:text-4xl py-3 lg:py-1">Minhas habilidades</h2>
                        <p className="md:w-70 mb-8">
                            Tecnologias que utilizo no meu dia a dia e que estou sempre buscando evoluir.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">

                        <div className="flex flex-col justify-center items-center p-3 border border-gray-800  rounded-xl hover:border-blue-500/40 transition-colors">
                            <SiReact size={30} className="text-blue-500" />
                            <span>React</span>
                        </div>

                        <div className="flex flex-col justify-center items-center  p-3 border border-gray-800  rounded-xl hover:border-blue-500/40 transition-colors">
                            <SiNextcloud size={30} className="text-blue-500" />
                            <span>Next</span>
                        </div>

                        <div className="flex flex-col justify-center items-center  p-3 border border-gray-800  rounded-xl hover:border-blue-500/40 transition-colors">
                            <SiTailwindcss size={30} className="text-blue-500" />
                            <span className="text-center">Tailwind CSS</span>
                        </div>

                        <div className="flex flex-col justify-center items-center  p-3 border border-gray-800  rounded-xl hover:border-blue-500/40 transition-colors">
                            <SiTypescript size={30} className="text-blue-500" />
                            <span>Typescript</span>
                        </div>

                        <div className="flex flex-col justify-center items-center  p-3 border border-gray-800  rounded-xl hover:border-blue-500/40 transition-colors">
                            <SiJavascript size={30} className="text-blue-500" />
                            <span>Javascript</span>
                        </div>

                        <div className="flex flex-col justify-center items-center p-3 border border-gray-800  rounded-xl hover:border-blue-500/40 transition-colors">
                            <SiGit size={30} className="text-blue-500" />
                            <span>Git</span>
                        </div>

                        <div className="flex flex-col justify-center items-center p-3 border border-gray-800  rounded-xl hover:border-blue-500/40 transition-colors">
                            <SiGithub size={30} className="text-blue-500" />
                            <span>Github</span>
                        </div>

                        <div className="flex flex-col justify-center items-center p-3 border border-gray-800  rounded-xl hover:border-blue-500/40 transition-colors">
                            <SiHtml5 size={30} className="text-blue-500" />
                            <span>Html 5</span>
                        </div>

                        <div className="flex flex-col justify-center items-center p-3 border border-gray-800  rounded-xl hover:border-blue-500/40 transition-colors">
                            <SiCss size={30} className="text-blue-500" />
                            <span>CSS 3</span>
                        </div>

                        <div className="flex flex-col justify-center items-center p-3 border border-gray-800  rounded-xl hover:border-blue-500/40 transition-colors">
                            <SiFigma size={30} className="text-blue-500" />
                            <span>Figma</span>
                        </div>

                    </div>
                </div>
            </Container>
                <div className=" w-full h-0.5 mt-10 bg-linear-to-r from-transparent via-[#f97416bd] to-transparent opacity-30" />
        </section>
    )
}

export default Tecnologias