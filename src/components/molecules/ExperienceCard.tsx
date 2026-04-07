import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import { useTranslation } from "react-i18next";

export interface ExperienceCardProps {
    icon: React.ReactNode;
    title: string;
    role: string;
    description: string;
    years: string;
    countryFlagIcon: React.ReactNode;
    url?: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
    icon, 
    title, 
    role, 
    description, 
    years, 
    countryFlagIcon, 
    url,
}) => {
    const { t } = useTranslation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.8,
    });

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            ref={ref}
            className="flex justify-center items-center m-5 w-screen md:w-auto"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Card
                className={`relative flex flex-row items-start p-6 space-x-6 shadow-lg rounded-xl w-2/3 overflow-visible dark:border-1 dark:border-amber-50`}
            >
                <div
                    className={`absolute -right-10 top-0 z-10 bg-blue-100 p-4 rounded-full flex items-center justify-center`}
                >
                    {icon}
                </div>

                <CardBody className={"lg:pl-16"}>
                    <h2 className="text-2xl font-semibold text-gray-800 mt-4 max-lg:mt-5 dark:text-blue-400">{t(title)}</h2>
                    <p className="text-md text-gray-600 dark:text-blue-500 whitespace-pre-wrap">{t(role)}</p>
                    <p className="text-gray-500 mt-2 dark:text-white whitespace-pre-wrap">{t(description)}</p>
                    
                    {url && (
                        <div className="mt-4">
                            <a 
                                href={url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-colors font-medium text-sm dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
                            >
                                <span>{t("common.read_paper", "Read Paper")}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    )}
                </CardBody>

                <div className="flex flex-row items-center space-x-4 absolute left-2 top-2 z-10">
                    <div>
                        {countryFlagIcon}
                    </div>

                    <div>
                        <span className="px-4 py-2 bg-blue-50 text-blue-500 dark:bg-blue-500 dark:text-white rounded-md font-semibold">{t(years)}</span>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};
