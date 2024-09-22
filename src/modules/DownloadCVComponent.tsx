import {Button, Tooltip} from "@nextui-org/react";
import React from "react";

interface DownloadCVComponentProps {
    variant: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost" | undefined;
}

export const DownloadCVComponent: React.FC<DownloadCVComponentProps> = ({variant}) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Baptiste-Lacroix-CV-2024.pdf';
        link.download = 'Baptiste-Lacroix-CV-2024.pdf';
        link.click();
    };

    const className = variant === "solid" ? "bg-primary" : "bg-white dark:bg-gray-200";
    return (
        <Tooltip content="Download my CV">
            <Button color={"primary"} variant={variant} className={className} onClick={handleDownload}>
                Download CV
            </Button>
        </Tooltip>
    );
};