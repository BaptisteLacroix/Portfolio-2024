import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { Project } from "../../types/Project";

export interface ProjectCardProps {
    card: Project;
    index: number;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onPress: (project: Project) => void;
}

export const ProjectCard = React.memo(({ card, index, setHovered, onPress }: ProjectCardProps) => {
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
            onTap={() => onPress(card)}
            className="cursor-pointer group dark:border-1 dark:border-amber-50 rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-80 w-full transition-all duration-300 ease-out"
        >
            {card.featured && (
                <div className="absolute top-2 right-2 z-50 bg-blue-600/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm shadow-blue-500/30 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                    Featured
                </div>
            )}
            <img
                src={card.img}
                alt={t(card.title)}
                className="object-cover absolute inset-0 w-full h-full group-hover:scale-110 transition-transform duration-300 ease-out"
            />
            {/* Title Overlay */}
            <div
                className="absolute w-full bottom-0 p-3 bg-black/60 text-white font-bold text-xl md:text-2xl transition-opacity duration-300 z-50 group-hover:opacity-100 opacity-90"
            >
                {t(card.title)}
            </div>
        </motion.div>
    );

    return motion_div;
});

ProjectCard.displayName = "ProjectCard";
