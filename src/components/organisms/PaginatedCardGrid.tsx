import { useState } from "react";
import { Pagination, useDisclosure } from "@nextui-org/react";
import { ProjectCard } from "../molecules/ProjectCard";
import { Project } from "../../types/Project";
import { ProjectModal } from "./ProjectModal";

interface PaginatedCardGridProps {
    cards: Project[];
}

export function PaginatedCardGrid({ cards }: PaginatedCardGridProps) {
    const [hovered, setHovered] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    
    // Modal state
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleProjectPress = (project: Project) => {
        setSelectedProject(project);
        onOpen();
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
        onClose();
    };

    const ITEMS_PER_PAGE = 6;

    // Calculate the projects for the current page
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentProjects = cards.slice(indexOfFirstItem, indexOfLastItem);

    // Total pages needed for pagination
    const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto p-4 w-full">
                {currentProjects.map((card, index) => (
                    <ProjectCard
                        key={card.title}
                        card={card}
                        index={index}
                        hovered={hovered}
                        setHovered={setHovered}
                        onPress={handleProjectPress}
                    />
                ))}
            </div>

            <div className="mt-6">
                <Pagination
                    aria-label={"Projects Pagination"}
                    total={totalPages}
                    initialPage={currentPage}
                    onChange={(page) => setCurrentPage(page)}
                    showControls
                    className="gap-2"
                    color={"primary"}
                />
            </div>

            <ProjectModal 
                isOpen={isOpen} 
                onClose={handleCloseModal} 
                project={selectedProject} 
            />
        </div>
    );
}
