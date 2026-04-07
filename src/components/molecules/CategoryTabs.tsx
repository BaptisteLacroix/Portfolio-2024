import { Button } from "@nextui-org/react";

interface CategoryTabsProps<T extends string> {
    tabs: T[];
    currentCategory: T;
    onCategoryChange: (category: T) => void;
}

export const CategoryTabs = <T extends string>({
    tabs,
    currentCategory,
    onCategoryChange,
}: CategoryTabsProps<T>) => {
    return (
        <div className="flex flex-wrap justify-center gap-3 mt-6 pb-2">
            {tabs.map((tab) => (
                <Button
                    key={tab}
                    onPress={() => onCategoryChange(tab)}
                    className={`transition-colors px-4 py-2 rounded-lg ${
                        currentCategory === tab
                            ? "bg-blue-600 text-white"
                            : "border-2 bg-white border-blue-600 text-blue-600 dark:text-blue-800 dark:bg-gray-200 hover:opacity-80"
                    }`}
                >
                    {tab}
                </Button>
            ))}
        </div>
    );
};
