import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnownTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction { raw }
        technology { name }
        profilePicture { url }
        socials { url iconSvg }
        knownTechs { iconSvg name startDate }
        highlightProjects {
          slug
          thumbnail { url }
          title
          shortDescription
          technologies { name }
        }
      }
    }
  `;

  const data = await fetchHygraphQuery(query, 60 * 60 * 24);

  console.log("Dados retornados de fetchHygraphQuery:", data); // Debug

  return data ?? {}; // Evita retornar null
};

export default async function Home() {
  const { page: pageData } = await getPageData()  

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs}/> 
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience/>
    </>
  )
}
