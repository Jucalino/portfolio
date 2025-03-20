import { KnownTech } from "./projects";
import type { RichTextContent } from '@graphcms/rich-text-types'

export type Social = {
    url: string
    iconSvg: string
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
    knowTechs: KnownTech[]
}

export type HomePageData = {
    page: HomePageInfo
} 