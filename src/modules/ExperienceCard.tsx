import { Card, CardBody, Button } from "@nextui-org/react";
import { PolytechIcon } from "./icons/formationIcons/PolytechIcon.tsx";
import { AirbusIcon } from "./icons/formationIcons/AirbusIcon.tsx";
import { BusitIcon } from "./icons/formationIcons/BusitIcon.tsx";
import { IUTIcon } from "./icons/formationIcons/IUTIcon.tsx";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, {useState} from "react";

interface ExperienceCardProps {
    icon: JSX.Element;
    title: string;
    company: string;
    description: string;
    years: string;
    isOdd: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ icon, title, company, description, years, isOdd }) => {
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
            className={`flex justify-center items-center m-5 w-screen md:w-auto`}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <Card
                className={`relative flex ${
                    isOdd ? "flex-row-reverse" : "flex-row"
                } items-start p-6 space-x-6 shadow-lg rounded-xl w-2/3 overflow-visible dark:border-1 dark:border-amber-50`}
            >
                <div
                    className={`absolute ${
                        isOdd ? "-right-10" : "-left-10"
                    } top-0 z-10 bg-blue-100 p-4 rounded-full flex items-center justify-center`}
                >
                    {icon}
                </div>

                <CardBody className={`${isOdd ? "lg:pr-16 text-right" : "lg:pl-16"}`}>
                    <h2 className="text-2xl font-semibold text-gray-800 mt-4 max-lg:mt-5 dark:text-blue-400">{title}</h2>
                    <p className="text-md text-gray-600 dark:text-blue-500">{company}</p>
                    <p className="text-gray-500 mt-2 dark:text-white">{description}</p>
                </CardBody>

                <div className={`absolute top-5 ${isOdd ? "left-5" : "right-5"}`}>
                    <span className="px-4 py-2 bg-blue-50 text-blue-500 dark:bg-blue-500 dark:text-white rounded-md font-semibold">{years}</span>
                </div>
            </Card>
        </motion.div>
    );
};

export const ExperienceList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const educationData = [
        {
            icon: <PolytechIcon />,
            title: "Polytech Nice Sophia",
            company: "Master's degree - In computer engineering",
            description: "Studying computer engineering at Polytech Nice Sophia, specializing in software engineering.",
            years: "2023 - 2026",
            isOdd: true,
        },
        {
            icon: <IUTIcon />,
            title: "IUT Nice Côte d'Azur",
            company: "BUT - Computer Science",
            description: "Graduated with a DUT in computer science from IUT Nice Côte d'Azur, specializing in software development.",
            years: "2021 - 2023",
            isOdd: false,
        },
    ];

    const experienceData = [
        {
            icon: <AirbusIcon className={"rounded-full"} />,
            title: "Airbus Defense and Space",
            company: "Apprentice - Software Engineer",
            description: "Working as an apprentice software engineer at Airbus Defense and Space, specializing in software development.",
            years: "2023 - 2026",
            isOdd: false,
        },
        {
            icon: <BusitIcon />,
            title: "Busit SAS",
            company: "Internship - Software Developer",
            description: "Internship as a full stack developer at Busit SAS, specializing in web development.",
            years: "4 month - 2023",
            isOdd: true,
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center p-4 w-full lg:p-6">
            {currentPage === 1 &&
                educationData.map((item, index) => (
                    <ExperienceCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        company={item.company}
                        description={item.description}
                        years={item.years}
                        isOdd={item.isOdd}
                    />
                ))}

            {currentPage === 2 &&
                experienceData.map((item, index) => (
                    <ExperienceCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        company={item.company}
                        description={item.description}
                        years={item.years}
                        isOdd={item.isOdd}
                    />
                ))}

            <div className="flex mt-6 space-x-4">
                <Button
                    onPress={() => setCurrentPage(1)}
                    className={`${
                        currentPage === 1 ? "bg-blue-600 text-white" : "border-2 bg-white border-blue-600 text-blue-600 dark:text-blue-800 dark:bg-gray-200 hover:opacity-80"
                    } transition-colors px-4 py-2 rounded-lg`}
                >
                    Education
                </Button>
                <Button
                    onPress={() => setCurrentPage(2)}
                    className={`${
                        currentPage === 2 ? "bg-blue-600 text-white" : "border-2 bg-white border-blue-600 text-blue-600 dark:text-blue-800 dark:bg-gray-200 hover:opacity-80"
                    } transition-colors px-4 py-2 rounded-lg`}
                >
                    Experience
                </Button>
            </div>
        </div>
    );
};
