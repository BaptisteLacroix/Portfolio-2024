import { Card, CardBody } from "@nextui-org/react";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SkillCardProps {
    name: string;
    icon: ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.8,
    });

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="m-4"
        >
            <Card className="w-32 h-32 rounded-full shadow-md flex items-center justify-center relative overflow-hidden bg-white">
                <CardBody className="flex flex-col items-center justify-center">
                    {icon}
                    <span className="text-md font-semibold text-gray-800 mt-2">{name}</span>
                </CardBody>
            </Card>
        </motion.div>
    );
};

export default SkillCard;
