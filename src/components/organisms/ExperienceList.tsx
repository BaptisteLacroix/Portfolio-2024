import React, { useState, useRef } from "react";
import { ExperienceCard } from "../molecules/ExperienceCard";
import { CategoryTabs } from "../molecules/CategoryTabs";
import { EDUCATION_DATA, EXPERIENCE_DATA, PUBLICATIONS_DATA } from "../../data/experienceData";

type CategoryType = "Education" | "Experience" | "Publications";

export const ExperienceList: React.FC = () => {
    const [currentCategory, setCurrentCategory] = useState<CategoryType>("Education");
    const listRef = useRef<HTMLDivElement>(null);

    const getCurrentData = () => {
        if (currentCategory === "Education") return EDUCATION_DATA;
        if (currentCategory === "Experience") return EXPERIENCE_DATA;
        return PUBLICATIONS_DATA;
    };

    const currentData = getCurrentData();
    const tabs: CategoryType[] = ["Education", "Experience", "Publications"];

    const handleCategoryChange = (category: CategoryType) => {
        setCurrentCategory(category);
        if (listRef.current) {
            const y = listRef.current.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 w-full lg:p-6 min-h-[500px]" ref={listRef}>
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
                onCategoryChange={handleCategoryChange}
            />
        </div>
    );
};