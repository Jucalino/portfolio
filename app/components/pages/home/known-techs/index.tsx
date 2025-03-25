import { SectionTitle } from "@/app/components/section-title"
import { KnownTech } from "./known-techs"
import { KnownTech as IKnowntech } from "@/app/types/projects"

type KnownTechProps = {
    techs: IKnowntech[]
}

export const KnownTechs = ({ techs }: KnownTechProps) => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos" />

            <div className="grid grid-cols-3 gap-3 mt-[60px]">
                {techs?.map((tech) => (
                    <KnownTech key={tech.name} tech={tech}
                    />
                ))}
            </div>
        </section>
    )
}   