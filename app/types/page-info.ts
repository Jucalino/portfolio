import { KnownTech, Project } from "./projects";
import type { RichTextContent } from '@graphcms/rich-text-types'

export type Social = {
    url: string
    iconSvg: string
}

export type HomePageData = {
    page: HomePageInfo
} 

export type HomePageInfo = {
    introduction: {
        raw: RichTextContent;
    }
    technology: KnownTech[]
    profilePicture: {
        url: string;
    }
    socials: Social[]
    knownTechs: KnownTech[]
    highlightProjects: Project[]
}

