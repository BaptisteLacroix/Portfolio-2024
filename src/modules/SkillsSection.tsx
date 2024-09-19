import {Pagination} from "@nextui-org/react";
import SkillCard from "./SkillCard";
import {useState} from "react";
import {JavaIcon} from "./svg/languages/JavaIcon.tsx";
import {PythonIcon} from "./svg/languages/PythonIcon.tsx";
import {AndroidIcon} from "./svg/languages/AndroidIcon.tsx";
import {ReactIcon} from "./svg/languages/ReactIcon.tsx";
import {JavascriptIcon} from "./svg/languages/JavascriptIcon.tsx";
import {TypescriptIcon} from "./svg/languages/TypescriptIcon.tsx";
import {PHPIcon} from "./svg/languages/PHPIcon.tsx";
import {HtmlIcon} from "./svg/languages/HtmlIcon.tsx";
import {CssIcon} from "./svg/languages/CssIcon.tsx";
import {CIcon} from "./svg/languages/CIcon.tsx";
import {LuaIcon} from "./svg/languages/LuaIcon.tsx";
import {FlaskIcon} from "./svg/languages/FlaskIcon.tsx";
import {SpringBoot} from "./svg/languages/SpringBoot.tsx";
import {NextUIIcon} from "./svg/languages/NextUIIcon.tsx";
import {GitlabIcon} from "./svg/languages/GitlabIcon.tsx";
import {GitIcon} from "./svg/languages/GitIcon.tsx";
import {DockerIcon} from "./svg/languages/DockerIcon.tsx";
import {MongoDBIcon} from "./svg/languages/MongoDBIcon.tsx";
import {MysqlIcon} from "./svg/languages/MysqlIcon.tsx";
import {PostgreSQLIcon} from "./svg/languages/PostgreSQLIcon.tsx";
import {SQLiteIcon} from "./svg/languages/SQLiteIcon.tsx";
import {NextUIBlackIcon} from "./svg/languages/NextUIBlackIcon.tsx";

// Skills data array
const skills = [
    {name: "Java", icon: <JavaIcon className="w-12 h-12"/>},
    {name: "SpringBoot", icon: <SpringBoot className="w-12 h-12"/>},
    {name: "Android", icon: <AndroidIcon className="w-12 h-12"/>},
    {name: "Python", icon: <PythonIcon className="w-12 h-12"/>},
    {name: "Flask", icon: <FlaskIcon className="w-12 h-12"/>},
    {name: "Typescript", icon: <TypescriptIcon className="w-12 h-12"/>},
    {name: "React", icon: <ReactIcon className="w-12 h-12"/>},
    {name: "Javascript", icon: <JavascriptIcon className="w-12 h-12"/>},
    {name: "NextUI", icon: <NextUIBlackIcon className="w-12 h-12"/>},
    {name: "PHP", icon: <PHPIcon className="w-12 h-12"/>},
    {name: "HTML", icon: <HtmlIcon className="w-12 h-12"/>},
    {name: "CSS", icon: <CssIcon className="w-12 h-12"/>},
    {name: "C", icon: <CIcon />},
    {name: "Lua", icon: <LuaIcon className="w-12 h-12"/>},
    {name: "Gitlab", icon: <GitlabIcon className="w-12 h-12"/>},
    {name: "Git", icon: <GitIcon className="w-12 h-12"/>},
    {name: "Docker", icon: <DockerIcon className="w-12 h-12"/>},
    {name: "MongoDB", icon: <MongoDBIcon className="w-12 h-12"/>},
    {name: "MySQL", icon: <MysqlIcon className="w-12 h-12"/>},
    {name: "PostgreSQL", icon: <PostgreSQLIcon className="w-12 h-12"/>},
    {name: "SQLite", icon: <SQLiteIcon className="w-12 h-12"/>},
];

const SkillsSection: React.FC = () => {
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Number of items per page

    // Calculate the range of items to display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentSkills = skills.slice(startIndex, endIndex);

    return (
        <div className="min-h-[90vh]">
            <div className="flex flex-col items-center my-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Stacks and languages</h2>
                <p className="text-gray-600 mb-8 text-center max-w-lg">
                    Here are some of the technologies I have worked with. I am constantly learning new
                    technologies and improving my skills. I am always open to new opportunities to learn and
                    grow.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {currentSkills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            name={skill.name}
                            icon={skill.icon}
                        />
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="mt-8">
                    <Pagination
                        total={Math.ceil(skills.length / itemsPerPage)}
                        initialPage={1}
                        onChange={(page) => setCurrentPage(page)}
                        shadow
                        bordered
                        color="primary"
                        rounded
                        showControls={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
