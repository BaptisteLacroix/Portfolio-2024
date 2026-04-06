import { ExperienceCardProps } from "../components/molecules/ExperienceCard";
import { PolytechIcon } from "../components/atoms/icons/formationIcons/PolytechIcon";
import { CanadianFlagIcon } from "../components/atoms/icons/flags/CanadianFlagIcon";
import { FrenchFlagIcon } from "../components/atoms/icons/flags/FrenchFlagIcon";
import { AirbusIcon } from "../components/atoms/icons/formationIcons/AirbusIcon";
import { BusitIcon } from "../components/atoms/icons/formationIcons/BusitIcon";
import { IUTIcon } from "../components/atoms/icons/formationIcons/IUTIcon";
import { McMasterUniversityIcon } from "../components/atoms/icons/formationIcons/McMasterUniversityIcon";

export const EDUCATION_DATA: ExperienceCardProps[] = [
    {
        icon: <PolytechIcon />,
        title: "Polytech Nice Sophia",
        role: "experience.education.polytech.role",
        description: "experience.education.polytech.description",
        years: "2023 - 2026",
        countryFlagIcon: <FrenchFlagIcon />,
    },
    {
        icon: <IUTIcon />,
        title: "IUT Nice Côte d'Azur",
        role: "experience.education.iut.role",
        description: "experience.education.iut.description",
        years: "2021 - 2023",
        countryFlagIcon: <FrenchFlagIcon />,
    },
];

export const EXPERIENCE_DATA: ExperienceCardProps[] = [
    {
        icon: <AirbusIcon className="rounded-full" />,
        title: "Airbus Defense and Space",
        role: "experience.work.airbus.role",
        description: "experience.work.airbus.description",
        years: "2023 - 2026",
        countryFlagIcon: <FrenchFlagIcon />,
    },
    {
        icon: <McMasterUniversityIcon className="rounded-full" />,
        title: "McMaster’s Centre for Software Certification (McSCert)",
        role: "experience.work.mcmaster.role",
        description: "experience.work.mcmaster.description",
        years: "experience.work.mcmaster.years",
        countryFlagIcon: <CanadianFlagIcon />,
    },
    {
        icon: <BusitIcon />,
        title: "Busit SAS",
        role: "experience.work.busit.role",
        description: "experience.work.busit.description",
        years: "experience.work.busit.years",
        countryFlagIcon: <FrenchFlagIcon />,
    },
];
