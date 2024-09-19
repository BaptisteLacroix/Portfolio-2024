import {Card, CardBody} from "@nextui-org/react";
import {ReactNode} from "react";

interface SkillCardProps {
    name: string;
    icon: ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({name, icon}) => {
    return (
        <Card
            className="w-32 h-32 rounded-full shadow-md flex items-center justify-center relative overflow-hidden bg-white m-4">
            <CardBody className="flex flex-col items-center justify-center">
                {icon}
                <span className="text-md font-semibold text-gray-800">{name}</span>
            </CardBody>
        </Card>
    );
};

export default SkillCard;
