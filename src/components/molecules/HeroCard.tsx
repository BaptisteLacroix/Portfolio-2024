import { Button, Card, CardBody, CardFooter, CardHeader, Tooltip } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { DownloadCVComponent } from "./DownloadCVComponent";

export const HeroCard = () => {
    const { t } = useTranslation();

    return (
        <Card className="shadow-none mt-8 mb-8 bg-inherit">
            <CardHeader className="pb-0">
                <h1 className="text-4xl font-bold text-left">
                    {t("home.hello")}
                </h1>
            </CardHeader>
            <CardBody>
                <p className="text-gray-400 text-left">
                    {t("home.description")}
                </p>
            </CardBody>
            <CardFooter>
                <div className="flex space-x-4">
                    <a href={"https://www.linkedin.com/in/lacroix-baptiste/"} target={"_blank"} rel="noreferrer">
                        <Tooltip content={t("home.visitLinkedin")}>
                            <Button color={"primary"}>
                                {t("home.hireMe")}
                            </Button>
                        </Tooltip>
                    </a>
                    <DownloadCVComponent variant={"bordered"}/>
                </div>
            </CardFooter>
        </Card>
    );
};
