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
        details: "experience.work.airbus.details",
        years: "2023 - 2026",
        countryFlagIcon: <FrenchFlagIcon />,
    },
    {
        icon: <McMasterUniversityIcon className="rounded-full" />,
        title: "McMaster’s Centre for Software Certification (McSCert)",
        role: "experience.work.mcmaster.role",
        description: "experience.work.mcmaster.description",
        details: "experience.work.mcmaster.details",
        years: "experience.work.mcmaster.years",
        countryFlagIcon: <CanadianFlagIcon />,
    },
    {
        icon: <BusitIcon />,
        title: "Busit SAS",
        role: "experience.work.busit.role",
        description: "experience.work.busit.description",
        details: "experience.work.busit.details",
        years: "experience.work.busit.years",
        countryFlagIcon: <FrenchFlagIcon />,
    },
];

export const PUBLICATIONS_DATA: ExperienceCardProps[] = [
    {
        icon: <McMasterUniversityIcon className="rounded-full" />,
        title: "McMaster’s Centre for Software Certification (McSCert)",
        role: "experience.publications.model_cards.role",
        description: "experience.publications.model_cards.description",
        years: "experience.publications.model_cards.years",
        countryFlagIcon: <CanadianFlagIcon />,
        url: "https://conf.researchr.org/details/icse-2026/icse-2026-nier/6/Model-Cards-for-Responsible-AI-Stop-Carding-Start-Modelling",
    },
];
