import { TbBrandGithub } from "react-icons/tb"
import { Button } from "../../button"
import { SectionTitle } from "../../section-title"
import { TechBadge } from "../../tech-badge"
import { FiGlobe } from 'react-icons/fi'
import { Link } from "../../link"
import { HiArrowNarrowLeft } from "react-icons/hi"

export const ProjectDatails = () => {
    return(
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
            <div
            className="absolute inset-0 z-[-1] "
            style={{
                background: 'url(/images/hero-bg.png) no-repeat center/cover, url(/images/pirate.png) no-repeat center/cover'
            }}
            />

            <SectionTitle
            subtitle="projetos"
            title="Linguagem dos Piratas"
            className="text-center items-center sm:[&>h3]:text-4xl"
            />
            <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
            Pirate language, nada mais é que um google tradutor porém da linguagem
          dos piratas, o texto é escrito em ingles continua em ingles porém, de
          forma que os piratas falavam a ideia é essa
            </p>
            <div className="w-full max-w-[350px] flex flex-wrap gap-2 items-center justify-center">
                <TechBadge name="Next.Js"/>
                <TechBadge name="Next.Js"/>
                <TechBadge name="Next.Js"/>
                <TechBadge name="Next.Js"/>
            </div>
            <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
                <a href="https://github.com/Jucalino/pirate-language" target="_blank">
                    <Button className="min-w-[180px]">
                        <TbBrandGithub size={20}/>Repositorio
                    </Button>
                </a>
                <a href="https://jucalino.github.io/pirate-language/" target="_blank">
                    <Button className="min-w-[180px]">
                        <FiGlobe size={20}/>Projeto Online
                    </Button>
                </a>
            </div>
            <Link href="/projects">
                <HiArrowNarrowLeft size={20}/> Voltar para projetos
            </Link>
        </section>
    )
}