import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Tooltip} from "@nextui-org/react";
import React from "react";
import { useTranslation } from "react-i18next";

interface DownloadCVComponentProps {
    variant: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost" | undefined;
}

export const DownloadCVComponent: React.FC<DownloadCVComponentProps> = ({variant}) => {
    const { t } = useTranslation();
    
    const handleDownload = (lang: string) => {
        const link = document.createElement('a');
        const fileName = t("home.cvFileName", { lng: lang, defaultValue: "Baptiste-Lacroix-CV.pdf" });
        link.href = `/${fileName}`;
        link.download = fileName;
        link.click();
    };

    const className = variant === "solid" ? "bg-primary text-white" : "bg-white dark:bg-gray-200 text-primary";
    
    return (
        <Dropdown>
            <Tooltip content={t("home.downloadCvTooltip", "Download my CV")}>
                <div className="inline-block">
                    <DropdownTrigger>
                        <Button color={"primary"} variant={variant} className={className}>
                            {t("home.downloadCv", "Download CV")}
                        </Button>
                    </DropdownTrigger>
                </div>
            </Tooltip>
            <DropdownMenu 
                aria-label="CV Language Selection" 
                onAction={(key) => handleDownload(key as string)}
            >
                <DropdownItem key="en">English</DropdownItem>
                <DropdownItem key="fr">Français</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};