import { useTranslation } from "react-i18next";
import { PaginatedCardGrid } from "./PaginatedCardGrid";
import { projects } from "../../data/projectsData";

export const PortfolioComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="container mx-auto p-8 min-h-[100vh] text-center">
            <div className="flex flex-col items-center my-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4 dark:text-blue-400">{t("portfolio.title")}</h2>
                <p className="text-gray-600 mb-8 text-center max-w-lg dark:text-white">
                    {t("portfolio.description")}
                </p>
            </div>
            <PaginatedCardGrid cards={projects}/>
        </div>
    )
}
