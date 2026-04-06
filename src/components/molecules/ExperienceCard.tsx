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
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
    icon, 
    title, 
    role, 
    description, 
    years, 
    countryFlagIcon, 
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
                    <p className="text-md text-gray-600 dark:text-blue-500">{t(role)}</p>
                    <p className="text-gray-500 mt-2 dark:text-white">{t(description)}</p>
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
