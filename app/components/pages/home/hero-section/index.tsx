import { Button } from "@/app/components/button";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";

const MOCK_CONTACTS = [
  {
    url: "https://github.com/Jucalino",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://www.linkedin.com/in/jos%C3%A9-luis-fl%C3%A1vio-482246211/",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "https://api.whatsapp.com/send/?phone=55034984204460&text&type=phone_number&app_absent=0",
    icon: <TbBrandWhatsapp />,
  },
];

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full  lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">José Luis</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Olá, meu nome é José Luís tenho 21 anos, busco aplicar os
            conhecimentos adquiridos ao longo de minha trajetória acadêmica com
            o intuito de contribuir com o sucesso da empresa. Possuo
            conhecimento Frontend nas tecnologias React, NextJs, Angular,
            Javascript, Typescript, HTML e CSS, no Backend Node.JS e entendo os
            conceitos básicos de SQL. Atualmente estou no 3° período de Análise
            e Desenvolvimento de Sistemas no Instituto Federal do Triângulo
            Mineiro. Já tive uma experiência como freelancer e no momento
            procuro minha primeira oportunidade de Estágio como Programador
            Frontend, Backend ou Fullstack. Estou disposto a aprender novas
            tecnologias e contribuir com a empresa.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 7 }).map((_, index) => (
              <TechBadge name="Next.Js" />
            ))}
          </div>

          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          className=" w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
          width={320}
          height={304}
          src="/images/profile-pic.png"
          alt="Foto de perfil Juca"
        />
      </div>
    </section>
  );
};
