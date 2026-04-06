import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { Project } from "../../types/Project";

export interface ProjectCardProps {
    card: Project;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onPress: (project: Project) => void;
}

export const ProjectCard = React.memo(({ card, index, hovered, setHovered, onPress }: ProjectCardProps) => {
    const { t } = useTranslation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.6,
    });

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const motion_div: JSX.Element = (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onPress(card)}
            className={`cursor-pointer dark:border-1 dark:border-amber-50 rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-80 w-full transition-all duration-300 ease-out ${hovered !== null && hovered !== index ? "blur-sm scale-[0.98]" : ""}`}
        >
            <img
                src={card.img}
                alt={t(card.title)}
                className={`object-cover absolute inset-0 w-full h-full hover:scale-100 ${hovered === index ? "scale-110" : ""} transition-transform duration-300 ease-out`}
            />
            {/* Title Overlay */}
            <div
                className="absolute w-full bottom-0 p-3 bg-black/60 text-white font-bold text-xl md:text-2xl transition-opacity duration-300 z-50"
                style={{ opacity: hovered === index ? 1 : 0.9 }}
            >
                {t(card.title)}
            </div>
            <div
                className={`absolute inset-0 bg-black/50 flex py-8 px-4 transition-opacity duration-300 ${hovered === index ? "opacity-100" : "opacity-0"}`}
            >
                <div
                    className="text-lg md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200"
                >
                    {/* Show languages on hover */}
                    <ul>
                        {card.languages.map((language, idx) => (
                            <li className={'flex flex-row mr-5 mt-5 mb-5'} key={idx}>
                                {language.logo}
                                <span className={"ml-2"}>{language.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );

    return motion_div;
});

ProjectCard.displayName = "ProjectCard";
