import React from "react";
import { useTranslation } from "react-i18next";
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import { FlagIcon } from "../atoms/icons/personalDetailsIcons/FlagIcon";
import { DownloadCVComponent } from "./DownloadCVComponent";

export const EducationIntroCard: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Card className="w-full lg dark:border-1 dark:border-amber-50 rounded-lg ml-0 sm:m-4 p-4">
            <CardHeader className="pb-0 sm:justify-center">
                <h1 className="text-xl lg:text-2xl font-bold text-gray-700 dark:text-blue-400">
                    {t('educationCard.title')}
                </h1>
            </CardHeader>
            <Divider className="my-3 opacity-50"/>
            <CardBody className="space-y-4">
                <div className="flex items-center space-x-3 sm:justify-center">
                    <FlagIcon className="w-[48px] h-[48px]"/>
                    <div>
                        <p className="text-gray-600 text-sm lg:text-base dark:text-white">
                            {t('educationCard.studentStatus')}
                        </p>
                        <p className="text-gray-600 text-sm lg:text-base dark:text-white">
                            {t('educationCard.airbusStatus')}
                        </p>
                    </div>
                </div>
            </CardBody>
            <CardFooter className="flex sm:justify-center">
                <DownloadCVComponent variant="solid"/>
            </CardFooter>
        </Card>
    );
};
