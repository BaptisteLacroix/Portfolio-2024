import { AndroidIcon } from "../components/atoms/icons/languages/AndroidIcon";
import { CIcon } from "../components/atoms/icons/languages/CIcon";
import { CsharpIcon } from "../components/atoms/icons/languages/CSharpIcon";
import { DockerIcon } from "../components/atoms/icons/languages/DockerIcon";
import { FlaskIcon } from "../components/atoms/icons/languages/FlaskIcon";
import { GitIcon } from "../components/atoms/icons/languages/GitIcon";
import { GolangIcon } from "../components/atoms/icons/languages/GolangIcon";
import { JavaIcon } from "../components/atoms/icons/languages/JavaIcon";
import { KubernetesIcon } from "../components/atoms/icons/languages/KubernetesIcon";
import { MongoDBIcon } from "../components/atoms/icons/languages/MongoDBIcon";
import { MysqlIcon } from "../components/atoms/icons/languages/MysqlIcon";
import { PHPIcon } from "../components/atoms/icons/languages/PHPIcon";
import { PostgreSQLIcon } from "../components/atoms/icons/languages/PostgreSQLIcon";
import { PythonIcon } from "../components/atoms/icons/languages/PythonIcon";
import { ReactIcon } from "../components/atoms/icons/languages/ReactIcon";
import { SpringBoot } from "../components/atoms/icons/languages/SpringBoot";
import { ReactNode } from "react";

export type SkillCategory = "All" | "Backend" | "Frontend" | "Cloud & DevOps" | "Languages" | "Databases";

export interface Skill {
    name: string;
    icon: ReactNode;
    category: SkillCategory;
}

export const skillsData: Skill[] = [
    { name: "Java", icon: <JavaIcon className="w-12 h-12" />, category: "Languages" },
    { name: "Python", icon: <PythonIcon className="w-12 h-12" />, category: "Languages" },
    { name: "React", icon: <ReactIcon className="w-12 h-12" />, category: "Frontend" },
    { name: "Go", icon: <GolangIcon className="w-12 h-12" />, category: "Languages" },
    { name: "SpringBoot", icon: <SpringBoot className="w-12 h-12" />, category: "Backend" },
    { name: "Docker", icon: <DockerIcon className="w-12 h-12" />, category: "Cloud & DevOps" },
    { name: "Kubernetes", icon: <KubernetesIcon className="w-12 h-12" />, category: "Cloud & DevOps" },
    { name: "PostgreSQL", icon: <PostgreSQLIcon className="w-12 h-12" />, category: "Databases" },
    { name: "C#", icon: <CsharpIcon className="w-12 h-12" />, category: "Languages" },
    { name: "C", icon: <CIcon />, category: "Languages" },
    { name: "Android", icon: <AndroidIcon className="w-12 h-12" />, category: "Frontend" },
    { name: "Flask", icon: <FlaskIcon className="w-12 h-12" />, category: "Backend" },
    { name: "PHP", icon: <PHPIcon className="w-12 h-12" />, category: "Backend" },
    { name: "Git", icon: <GitIcon className="w-12 h-12" />, category: "Cloud & DevOps" },
    { name: "MongoDB", icon: <MongoDBIcon className="w-12 h-12" />, category: "Databases" },
    { name: "MySQL", icon: <MysqlIcon className="w-12 h-12" />, category: "Databases" },
];
