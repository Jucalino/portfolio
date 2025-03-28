import type { RichTextContent } from '@graphcms/rich-text-types'

export type KnownTech = {
    iconSvg: string 
    name: string 
    startdate: string 
}

export type ProjectSection = {
    title: string
    image: {
        url:string
    }
}

export type Project = {
    slug: string
    thumbnail: {
        url:string
    }
    title: string
    shortDescription: string
    technologies: KnownTech[]
    pageThumbnail: {
        url: string
    }
    section: ProjectSection[]
    description: {
        raw: RichTextContent 
    }
    liveProjectURL?:string
    gitHubURL?: string
}