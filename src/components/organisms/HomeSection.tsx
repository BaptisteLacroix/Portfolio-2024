import { Card, CardBody, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { HeroCard } from "../molecules/HeroCard";
import { PersonalDetailsCard } from "../molecules/PersonalDetailsCard";
import { AboutMeCard } from "../molecules/AboutMeCard";
import { JobStatusCard } from "../molecules/JobStatusCard";
import { useTranslation } from "react-i18next";

export const Home = () => {
    const { t } = useTranslation();
    const cardVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0},
    };

    return (
        <>
            <div className={"home-container"}>
                <div className="min-h-[100vh] flex items-center">
                    <div className="w-0 md:w-1/4"></div>
                    <div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                            transition={{duration: 0.5}}
                        >
                            <JobStatusCard status={t("home.jobStatus")} />
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                            transition={{duration: 0.5, delay: 0.2}}
                        >
                            <HeroCard />
                        </motion.div>

                        <Divider className="my-8"/>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                            transition={{duration: 0.5, delay: 0.4}}
                        >
                            <Card
                                className="w-full dark:bg-transparent flex justify-between bg-gray-100 p-0 md:p-5 rounded-lg shadow-md">
                                <CardBody className="flex flex-col md:flex-row overflow-hidden">
                                    <PersonalDetailsCard />
                                    <AboutMeCard />
                                </CardBody>
                            </Card>
                        </motion.div>
                    </div>
                    <div className="w-0 md:w-1/6"></div>
                </div>
            </div>
        </>
    );
};
