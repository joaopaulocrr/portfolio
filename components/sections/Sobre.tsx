import { CalendarCheck, GraduationCap, MapPin, MoveRight, Target } from "lucide-react"
import Container from "../ui/Container"

const Sobre = () => {
    return (
        <section className="w-full my-10 "id="sobre">
            <Container>
                <div className="md:flex md:items-end gap-10">
                    <div className="flex-1">
                        <p className="text-sm lg:text-2xl text-destak font-bold">/ / SOBRE MIM</p>
                        <h2 className="font-bold text-3xl lg:text-4xl py-3 lg:py-1">Prazer, João Paulo!</h2>
                        <p className="py-6">  
                            Sou apaixonado por tecnologia e tudo que envolve desenvolvimento web. Atualmente, estou focado em aprimorar minhas habilidades, construir projetos reais e buscar novas oportunidades - seja em uma vaga  ou como colaborador em projetos.
                        </p>

                        <p className="pb-6">
                            Acredito que o aprendizado contínuo é o que nos leva mais longe. Estou sempre estudando, praticando e buscando evoluir a cada dia.
                        </p>

                    </div>


                    <ul className="flex flex-col  flex-1 gap-5 mb-5">
                        <li className="flex items-center gap-8">
                            <MapPin className="text-destak"/>
                            <div className="flex flex-col">
                                <span>Localização</span>
                                <span>Brasil</span>
                            </div>
                        </li>

                        <li className="flex items-center gap-8">
                            <GraduationCap className="text-destak"/>
                            <div className="flex flex-col">
                                <span>Formação</span>
                                <span>Sempre em evolução</span>
                            </div>
                        </li>

                        <li className="flex items-center gap-8">
                            <Target className="text-destak"/>

                            <div className="flex flex-col">
                                <span>Foco</span>
                                <span>Frontend / Web</span>
                            </div>
                        </li>

                        <li className="flex items-center gap-8">
                            <CalendarCheck className="text-destak"/>
                            <div className="flex flex-col">
                                <span>Disponibilidade</span>
                                <span>Projetos e oportunidades</span>
                            </div>
                        </li>
                    </ul>

                </div>
                <a href="#" className="flex w-full md:w-70 py-2 px-5  gap-10 text- border border-destak rounded-lg items-center"> 
                    Saiba  mais sobre mim
                    <MoveRight className="text-destak"/>
                </a>
            </Container>
            <div className=" w-full h-0.5 mt-10 bg-linear-to-r from-transparent via-[#f97416bd] to-transparent opacity-30" />
        </section>
    )
}

export default Sobre