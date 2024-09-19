import {Card, CardBody} from "@nextui-org/react";
import {PolytechIcon} from "./icons/formationIcons/PolytechIcon.tsx";
import * as React from "react";
import {AirbusIcon} from "./icons/formationIcons/AirbusIcon.tsx";
import {BusitIcon} from "./icons/formationIcons/BusitIcon.tsx";
import {IUTIcon} from "./icons/formationIcons/IUTIcon.tsx";

interface ExperienceCardProps {
    icon: JSX.Element;
    title: string;
    company: string;
    description: string;
    years: string;
    isOdd: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({icon, title, company, description, years, isOdd}) => {
    return (
        <div className={`flex justify-center items-center m-5`}>
            <Card
                className={`relative flex ${
                    isOdd ? "flex-row-reverse" : "flex-row"
                } items-start p-6 space-x-6 shadow-lg bg-white rounded-xl w-2/3 overflow-visible`}
            >
                {/* Left or Right Section with Icon (Based on isOdd) */}
                <div
                    className={`absolute ${
                        isOdd ? "-right-10" : "-left-10"
                    } top-0 z-10 bg-blue-100 p-4 rounded-full flex items-center justify-center`}
                >
                    {icon}
                </div>

                {/* Content Section */}
                <CardBody className={`${isOdd ? "pr-16 text-right" : "pl-16"}`}>
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {title}
                    </h2>
                    <p className="text-md text-gray-600">{company}</p>
                    <p className="text-gray-500 mt-2">{description}</p>
                </CardBody>

                {/* Right or Left Section (Date, based on isOdd) */}
                <div className={`absolute top-5 ${isOdd ? "left-5" : "right-5"}`}>
                    <span className="px-4 py-2 bg-blue-50 text-blue-500 rounded-md font-semibold">
                        {years}
                    </span>
                </div>
            </Card>
        </div>
    );
};

// Main Page Component
export const ExperienceList: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center p-6 w-full">
            <ExperienceCard
                icon={<PolytechIcon/>}
                title="Polytech Nice Sophia"
                company="Master's degree - In computer engineering"
                description="Studying computer engineering at Polytech Nice Sophia, specializing in software engineering."
                years="2023 - 2026"
                isOdd={true}
            />
            <ExperienceCard
                icon={
                    <AirbusIcon className={"rounded-full"}/>
                }
                title="Airbus Defense and Space"
                company="Apprentice - Software Engineer"
                description="Working as an apprentice software engineer at Airbus Defense and Space, specializing in software development."
                years="2023 - 2026"
                isOdd={false}
            />
            <ExperienceCard
                icon={
                    <BusitIcon/>
                }
                title="Busit SAS"
                company="Internship - Software Developer"
                description="Internship as a full stack developer at Busit SAS, specializing in web development."
                years="April 2023 - August 2023"
                isOdd={true}
            />
            <ExperienceCard
                icon={
                    <IUTIcon/>
                }
                title="IUT Nice Côte d'Azur"
                company="BUT - Computer Science"
                description="Graduated with a DUT in computer science from IUT Nice Côte d'Azur, specializing in software development."
                years="2021 - 2023"
                isOdd={false}
            />
        </div>
    );
};
