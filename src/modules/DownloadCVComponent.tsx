import {Button} from "@nextui-org/react";
import React from "react";

export const DownloadCVComponent: React.FC = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Baptiste-Lacroix-CV-2024.pdf';
        link.download = 'Baptiste-Lacroix-CV-2024.pdf';
        link.click();
    };

    return (
        <Button color="primary" variant="bordered" onClick={handleDownload}>
            Download CV
        </Button>
    );
};