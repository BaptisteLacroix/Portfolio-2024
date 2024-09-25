import { Pagination } from "@nextui-org/react";
import SkillCard from "./SkillCard";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JavaIcon } from "./icons/languages/JavaIcon.tsx";
import { PythonIcon } from "./icons/languages/PythonIcon.tsx";
import { AndroidIcon } from "./icons/languages/AndroidIcon.tsx";
import { ReactIcon } from "./icons/languages/ReactIcon.tsx";
import { JavascriptIcon } from "./icons/languages/JavascriptIcon.tsx";
import { TypescriptIcon } from "./icons/languages/TypescriptIcon.tsx";
import { PHPIcon } from "./icons/languages/PHPIcon.tsx";
import { HtmlIcon } from "./icons/languages/HtmlIcon.tsx";
import { CssIcon } from "./icons/languages/CssIcon.tsx";
import { CIcon } from "./icons/languages/CIcon.tsx";
import { LuaIcon } from "./icons/languages/LuaIcon.tsx";
import { FlaskIcon } from "./icons/languages/FlaskIcon.tsx";
import { SpringBoot } from "./icons/languages/SpringBoot.tsx";
import { GitlabIcon } from "./icons/languages/GitlabIcon.tsx";
import { GitIcon } from "./icons/languages/GitIcon.tsx";
import { DockerIcon } from "./icons/languages/DockerIcon.tsx";
import { MongoDBIcon } from "./icons/languages/MongoDBIcon.tsx";
import { MysqlIcon } from "./icons/languages/MysqlIcon.tsx";
import { PostgreSQLIcon } from "./icons/languages/PostgreSQLIcon.tsx";
import { SQLiteIcon } from "./icons/languages/SQLiteIcon.tsx";
import { NextUIBlackIcon } from "./icons/languages/NextUIBlackIcon.tsx";

const skills = [
    { name: "Java", icon: <JavaIcon className="w-12 h-12" /> },
    { name: "SpringBoot", icon: <SpringBoot className="w-12 h-12" /> },
    { name: "Android", icon: <AndroidIcon className="w-12 h-12" /> },
    { name: "Python", icon: <PythonIcon className="w-12 h-12" /> },
    { name: "Flask", icon: <FlaskIcon className="w-12 h-12" /> },
    { name: "Typescript", icon: <TypescriptIcon className="w-12 h-12" /> },
    { name: "React", icon: <ReactIcon className="w-12 h-12" /> },
    { name: "Javascript", icon: <JavascriptIcon className="w-12 h-12" /> },
    { name: "NextUI", icon: <NextUIBlackIcon className="w-12 h-12" /> },
    { name: "PHP", icon: <PHPIcon className="w-12 h-12" /> },
    { name: "HTML", icon: <HtmlIcon className="w-12 h-12" /> },
    { name: "CSS", icon: <CssIcon className="w-12 h-12" /> },
    { name: "C", icon: <CIcon /> },
    { name: "Lua", icon: <LuaIcon className="w-12 h-12" /> },
    { name: "Gitlab", icon: <GitlabIcon className="w-12 h-12" /> },
    { name: "Git", icon: <GitIcon className="w-12 h-12" /> },
    { name: "Docker", icon: <DockerIcon className="w-12 h-12" /> },
    { name: "MongoDB", icon: <MongoDBIcon className="w-12 h-12" /> },
    { name: "MySQL", icon: <MysqlIcon className="w-12 h-12" /> },
    { name: "PostgreSQL", icon: <PostgreSQLIcon className="w-12 h-12" /> },
    { name: "SQLite", icon: <SQLiteIcon className="w-12 h-12" /> },
];

const SkillsSection: React.FC = () => {
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
        <div className="min-h-[100vh] flex items-center justify-center">
            <div className="flex flex-col items-center my-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4 dark:text-blue-400">Stacks and languages</h2>
                <p className="text-gray-600 mb-8 text-center max-w-lg dark:text-white">
                    Here are some of the technologies I have worked with. I am constantly learning new
                    technologies and improving my skills. I am always open to new opportunities to learn and
                    grow.
                </p>

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
            </div>
        </div>
    );
};

export default SkillsSection;
