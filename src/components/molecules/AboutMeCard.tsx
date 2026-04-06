import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import TypingAnimation from "../atoms/TypingAnimation";
import { useTranslation } from "react-i18next";

export const AboutMeCard = () => {
    const { t } = useTranslation();
    const getAge = () => {
        const birthDate = new Date(2003, 5, 20);
        const currentDate = new Date();
        return currentDate.getFullYear() - birthDate.getFullYear();
    }

    return (
        <Card className="w-full shadow-md dark:border-amber-50 dark:border-1 mt-2 sm:m-2">
            <CardHeader>
                <h1 className="font-semibold text-3xl">
                    <TypingAnimation/>
                </h1>
            </CardHeader>
            <CardBody>
                <div className="text-md text-left pl-2">
                    <p>
                        {t("aboutMe.text1", { age: getAge() })}
                    </p>
                    <p className={"mt-5"}>
                        {t("aboutMe.text2")}
                    </p>
                    <p className={"mt-5"}>
                        {t("aboutMe.text3")}
                    </p>
                </div>
            </CardBody>
            <CardFooter className="text-right">
                <h2 className="font-signature text-3xl text-gray-800 italic dark:text-blue-400">
                    Baptiste Lacroix
                </h2>
            </CardFooter>
        </Card>
    );
};
