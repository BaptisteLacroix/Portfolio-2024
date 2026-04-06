import React, { useState } from "react";
import { Pagination } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import SkillCard from "../molecules/SkillCard";
import { Skill } from "../../data/skillsData";

interface PaginatedSkillGridProps {
    skills: Skill[];
}

export const PaginatedSkillGrid: React.FC<PaginatedSkillGridProps> = ({ skills }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentSkills = skills.slice(startIndex, endIndex);

    // Define animations for the container
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* AnimatePresence enables exit animations */}
                <AnimatePresence mode={"wait"}>
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
            <div className="mt-8">
                <Pagination
                    aria-label={"Skills Pagination"}
                    total={Math.ceil(skills.length / itemsPerPage)}
                    initialPage={1}
                    onChange={(page) => setCurrentPage(page)}
                    color="primary"
                    showControls={true}
                />
            </div>
        </>
    );
};
