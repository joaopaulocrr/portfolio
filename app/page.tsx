import Hero from "@/components/sections/Hero";
import Projetos from "@/components/sections/Projetos";
import Sobre from "@/components/sections/Sobre";
import Tecnologias from "@/components/sections/Tecnologias";


export default function Home() {
  return (
   <main>
    <Hero />
    <Sobre />
    <Projetos />
    <Tecnologias />
   </main>
  );
}
