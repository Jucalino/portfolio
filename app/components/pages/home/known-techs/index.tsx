import { SectionTitle } from "@/app/components/section-title"
import { KnownTech } from "./known-techs"
import { TbBrandNextjs } from "react-icons/tb"

export const KnownTechs = () => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos" />

            <div className="grid grid-cols-3 gap-3 mt-[60px]">
                {Array.from({ length: 8 }).map((_, index) => (
                    <KnownTech key={index} tech={{
                        icon: <TbBrandNextjs/>,
                        name: 'Next.Js',
                        startDate: '2025-01-01'
                    }}
                    />
                ))}
            </div>
        </section>
    )
}   