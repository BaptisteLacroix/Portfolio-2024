import { ReactNode } from "react";

export interface ProjectLanguage {
    name: string;
    logo: ReactNode;
}

export interface Project {
    title: string;
    img: string;
    gallery?: string[];
    descriptionKey: string; // i18n key for the description
    githubUrl?: string;
    liveUrl?: string;
    languages: ProjectLanguage[];
}