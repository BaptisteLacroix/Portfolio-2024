import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Chip } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { Project } from "../../types/Project";

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const { t } = useTranslation();

    if (!project) return null;

    return (
        <Modal 
            isOpen={isOpen} 
            onClose={onClose} 
            size="3xl"
            scrollBehavior="inside"
            classNames={{
                base: "dark:bg-neutral-900 bg-white",
                header: "border-b-[1px] border-neutral-200 dark:border-neutral-800",
                footer: "border-t-[1px] border-neutral-200 dark:border-neutral-800",
                closeButton: "hover:bg-neutral-200 dark:hover:bg-neutral-800 active:bg-neutral-300 dark:active:bg-neutral-700",
            }}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-blue-400">{t(project.title)}</h2>
                        </ModalHeader>
                        <ModalBody className="py-6">
                            {/* Main Image */}
                            <div className="w-full shrink-0 h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden mb-4 relative">
                                <img
                                    src={project.img}
                                    alt={t(project.title)}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.languages.map((lang, index) => (
                                    <Chip 
                                        key={index}
                                        startContent={<div className="scale-75">{lang.logo}</div>}
                                        variant="flat"
                                        className="dark:bg-neutral-800 bg-neutral-100"
                                    >
                                        {lang.name}
                                    </Chip>
                                ))}
                            </div>

                            {/* Description */}
                            <div className="text-neutral-700 dark:text-neutral-300 whitespace-pre-line text-justify">
                                {t(project.descriptionKey)}
                            </div>

                            {/* Gallery */}
                            {project.gallery && project.gallery.length > 0 && (
                                <div className="mt-6 flex overflow-x-auto gap-4 pb-4">
                                    {project.gallery.map((img, idx) => (
                                        <img 
                                            key={idx} 
                                            src={img} 
                                            alt={`${t(project.title)} screenshot ${idx + 1}`} 
                                            className="w-48 h-32 object-cover rounded-lg flex-shrink-0"
                                        />
                                    ))}
                                </div>
                            )}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                {t("common.close", "Close")}
                            </Button>
                            {project.githubUrl && (
                                <Button 
                                    color="primary" 
                                    variant="flat"
                                    onPress={() => window.open(project.githubUrl, '_blank')}
                                >
                                    GitHub
                                </Button>
                            )}
                            {project.liveUrl && (
                                <Button 
                                    color="primary" 
                                    onPress={() => window.open(project.liveUrl, '_blank')}
                                >
                                    {t("common.live_demo", "Live Demo")}
                                </Button>
                            )}
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}