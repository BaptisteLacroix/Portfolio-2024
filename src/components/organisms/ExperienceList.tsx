import React, { useState } from "react";
import { ExperienceCard } from "../molecules/ExperienceCard";
import { CategoryTabs } from "../molecules/CategoryTabs";
import { EDUCATION_DATA, EXPERIENCE_DATA } from "../../data/experienceData";

type CategoryType = "Education" | "Experience";

export const ExperienceList: React.FC = () => {
    const [currentCategory, setCurrentCategory] = useState<CategoryType>("Education");

    const currentData = currentCategory === "Education" ? EDUCATION_DATA : EXPERIENCE_DATA;
    const tabs: CategoryType[] = ["Education", "Experience"];

    return (
        <div className="flex flex-col items-center justify-center p-4 w-full lg:p-6">
            <div
                className={`flex flex-col items-center w-full transition-all duration-300 ${
                    currentData.length > 3 ? "overflow-y-auto max-h-[80vh]" : ""
                }`}
            >
                {currentData.map((item, index) => (
                    <ExperienceCard
                        key={index}
                        {...item}
                    />
                ))}
            </div>

            <CategoryTabs
                tabs={tabs}
                currentCategory={currentCategory}
                onCategoryChange={setCurrentCategory}
            />
        </div>
    );
};