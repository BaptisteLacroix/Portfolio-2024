import React from "react";
import { useTranslation } from "react-i18next";
import { PaginatedSkillGrid } from "./PaginatedSkillGrid";
import { skillsData } from "../../data/skillsData";

const SkillsSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-[100vh] flex items-center justify-center">
            <div className="flex flex-col items-center my-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4 dark:text-blue-400">{t("skills.title")}</h2>
                <p className="text-gray-600 mb-8 text-center max-w-lg dark:text-white">
                    {t("skills.description")}
                </p>

                <PaginatedSkillGrid skills={skillsData} />
            </div>
        </div>
    );
};

export default SkillsSection;
