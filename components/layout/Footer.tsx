import { MoveRight } from "lucide-react"
import Container from "../ui/Container"

const Footer = () => {
  return (
    <footer className="w-full pb-12">
        <Container>
            <div className="flex flex-col  md:hidden">
                 <p className="text-sm lg:text-xl text-destak font-bold" >/ / Contato</p>
                 <h2 className="font-bold text-3xl lg:text-4xl py-3 lg:py-1">Vamos conversar?</h2>
                 <a href="#" className="flex justify-center w-full gap-3 py-3 font-bold rounded-lg bg-destak text-black">Me envie uma mensagem 
                    <span><MoveRight /></span>
                 </a>
            </div>
            <div className="hidden sm:flex justify-between w-full">
                <small className="">
                    &copy;2026 João Paulo. Todos os direitos reservados.
                </small>
                 <a href="#" className="flex items-center px-4 py-2 rounded-lg gap-3 bg-destak text-black">Me envie uma mensagem 
                    <span><MoveRight /></span>
                 </a>
               
            </div>
        </Container>
    </footer>
  )
}

export default Footer