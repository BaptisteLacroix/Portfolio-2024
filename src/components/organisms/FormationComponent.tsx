import React from "react";
import { ExperienceList } from "./ExperienceList";
import { EducationIntroCard } from "../molecules/EducationIntroCard";

export const FormationComponent: React.FC = () => {
    return (
        <div className="min-h-[100vh] flex flex-col lg:flex-row justify-center items-start lg:items-center p-6 sm:items-center">
            <div className="w-1/4"></div>
            <div className="w-full sm:w-3/4 lg:w-2/3 p-4 dark:bg-transparent">
                <EducationIntroCard />
            </div>
            <ExperienceList/>
            <div className="w-1/6"></div>
        </div>
    );
};

