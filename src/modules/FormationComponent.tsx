import {Card, CardHeader, CardBody, Button, CardFooter, Divider} from "@nextui-org/react";
import {FlagIcon} from "./svg/FlagIcon.tsx";
import {ExperienceList} from "./ExperienceCard.tsx";

export const FormationComponent = () => {
    return (
        <div className={"flex flex-row justify-center items-center h-screen"}>
            <div className="w-2/3 p-8 bg-white">
                {/* Section Title */}
                <Card className="w-full shadow-md bg-white rounded-lg m-4 p-4">
                    <CardHeader className="pb-0">
                        <h1 className="text-2xl font-bold text-gray-700">Personal Details</h1>
                    </CardHeader>
                    <Divider className="my-3 opacity-50"/>
                    <CardBody className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <FlagIcon className={"w-[30px] h-[30px]"}/>
                            <p className="text-gray-600">
                                I am a student at Polytech Nice Sophia and a Full Stack Developer
                            </p>
                        </div>
                    </CardBody>
                    <CardFooter className={"flex"}>
                        <Button color="primary">Download CV</Button>
                    </CardFooter>
                </Card>
            </div>
            <ExperienceList/>
        </div>
    );
}
