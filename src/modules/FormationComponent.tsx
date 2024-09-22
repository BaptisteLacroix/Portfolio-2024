import {Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";
import {FlagIcon} from "./icons/personalDetailsIcons/FlagIcon.tsx";
import {ExperienceList} from "./ExperienceCard.tsx";
import React from "react";
import {DownloadCVComponent} from "./DownloadCVComponent.tsx";

export const FormationComponent: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center p-6 min-h-[80vh]">
            <div className="w-0 md:w-1/4"></div>
            <div className="w-full lg:w-2/3 p-4 bg-white dark:bg-transparent">
                <Card className="w-full lg dark:border-1 dark:border-amber-50 rounded-lg ml-0 sm:m-4 p-4">
                    <CardHeader className="pb-0">
                        <h1 className="text-xl lg:text-2xl font-bold text-gray-700 dark:text-blue-400">Education &
                            Experience</h1>
                    </CardHeader>
                    <Divider className="my-3 opacity-50"/>
                    <CardBody className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <FlagIcon className="w-[30px] h-[30px]"/>
                            <div>
                                <p className="text-gray-600 text-sm lg:text-base dark:text-white">
                                    I am a student at Polytech Nice Sophia and a Full Stack Developer.
                                </p>
                                <p className="text-gray-600 text-sm lg:text-base dark:text-white">
                                    Apprentice at Airbus Defense and Space, responsible for software development.
                                </p>
                                <p className="text-sm lg:text-base dark:text-white">
                                    I'm currently looking for an opportunity to work as an intern in software
                                    development.
                                </p>
                            </div>
                        </div>
                    </CardBody>
                    <CardFooter className="flex">
                        <DownloadCVComponent variant="solid"/>
                    </CardFooter>
                </Card>
            </div>
            <ExperienceList/>
            <div className="w-0 md:w-1/6"></div>
        </div>
    );
};

