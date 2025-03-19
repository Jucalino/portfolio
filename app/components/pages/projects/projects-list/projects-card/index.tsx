import Image from "next/image";

export const ProjectsCard = () => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          src="/images/profile-pic.png"
          alt="Thumbnail do projeto Pirate Language"
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>
      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">Linguagem dos Piratas</strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Pirate language, nada mais é que um google tradutor porém da linguagem
          dos piratas, o texto é escrito em ingles continua em ingles porém, de
          forma que os piratas falavam a ideia é essa
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">Angular</span>
      </div>
    </div>
  );
};
