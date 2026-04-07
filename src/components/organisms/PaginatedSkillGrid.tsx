import React, { useState, useRef, useMemo } from "react";
import { Pagination } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import SkillCard from "../molecules/SkillCard";
import { Skill, SkillCategory } from "../../data/skillsData";
import { CategoryTabs } from "../molecules/CategoryTabs";

interface PaginatedSkillGridProps {
    skills: Skill[];
}

export const PaginatedSkillGrid: React.FC<PaginatedSkillGridProps> = ({ skills }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");
    const gridRef = useRef<HTMLDivElement>(null);
    const itemsPerPage = 8;

    const filteredSkills = useMemo(() => {
        if (activeCategory === "All") return skills;
        return skills.filter(skill => skill.category === activeCategory);
    }, [skills, activeCategory]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentSkills = filteredSkills.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredSkills.length / itemsPerPage);

    // Define animations for the container
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    const categories: SkillCategory[] = ["All", "Backend", "Frontend", "Cloud & DevOps", "Languages", "Databases"];

    const handleCategoryChange = (category: SkillCategory) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    return (
        <div className="w-full flex flex-col items-center" ref={gridRef}>
            <div className="mb-8">
                <CategoryTabs 
                    tabs={categories} 
                    currentCategory={activeCategory} 
                    onCategoryChange={handleCategoryChange} 
                />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 min-h-[400px]">
                {/* AnimatePresence enables exit animations */}
                <AnimatePresence mode="popLayout">
                    {currentSkills.map((skill) => (
                        <motion.div
                            key={skill.name} // Use unique key for AnimatePresence
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            <SkillCard
                                name={skill.name}
                                icon={skill.icon}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="mt-8 relative z-10 w-full flex justify-center">
                    <Pagination
                        aria-label={"Skills Pagination"}
                        total={totalPages}
                        initialPage={1}
                        page={currentPage}
                        onChange={(page) => {
                            setCurrentPage(page);
                            if (gridRef.current) {
                                const y = gridRef.current.getBoundingClientRect().top + window.scrollY - 100;
                                window.scrollTo({ top: y, behavior: "smooth" });
                            }
                        }}
                        color="primary"
                        showControls={true}
                    />
                </div>
            )}
        </div>
    );
};
