import { Badge, Card, CardHeader } from "@nextui-org/react";

interface JobStatusCardProps {
    status: string;
    isLive?: boolean;
}

export const JobStatusCard = ({ status, isLive = true }: JobStatusCardProps) => {
    return (
        <Card className="flex items-center m-1 border-1 lg:w-1/3 w-auto mt-[10vh]">
            <CardHeader className="flex items-center">
                {isLive && (
                    <Badge isInvisible={true} shape="circle">
                        <div className="bg-red-700 rounded-full p-1 pl-2 pr-2 text-white">
                            Live
                        </div>
                    </Badge>
                )}
                <div className="ml-3 text-lg font-semibold">
                    {status}
                </div>
            </CardHeader>
        </Card>
    );
};
