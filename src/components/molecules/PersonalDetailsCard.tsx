import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { EmailIcon } from "../atoms/icons/personalDetailsIcons/EmailIcon";
import ProtectedEmailLink from "../atoms/ProtectedEmailLink";
import { LanguageIcon } from "../atoms/icons/personalDetailsIcons/LanguageIcon";
import { FlagIcon } from "../atoms/icons/personalDetailsIcons/FlagIcon";

export const PersonalDetailsCard = () => {
    return (
        <Card className="w-full md:w-1/2 shadow-md dark:border-amber-50 dark:border-1 rounded-lg m-0 md:m-4 p-0 md:p-4">
            <CardHeader className="pb-0">
                <h1 className="text-2xl dark:text-white font-bold text-gray-700">
                    Personal Details
                </h1>
            </CardHeader>
            <Divider className="my-3 opacity-50"/>
            <CardBody className="space-y-4">
                <div className="flex items-center space-x-3">
                    <EmailIcon className={"w-[30px] h-[30px]"}/>
                    <p className="text-gray-600">
                        <strong className="text-gray-800 dark:text-blue-400">Email:</strong>
                        <ProtectedEmailLink className={'dark:text-white'}
                                            message={' contact@baptiste-lacroix.fr '}
                                            subject={encodeURIComponent('Potential Hire')}/>
                    </p>
                </div>
                <div className="flex items-center space-x-3">
                    <LanguageIcon className={"w-[30px] h-[30px]"}/>
                    <p className="text-gray-600 dark:text-white">
                        <strong className="text-gray-800 dark:text-blue-400">Languages:</strong>{" "}
                        French | English - B2 - TOEIC (830)
                    </p>
                </div>
                <div className="flex items-center space-x-3">
                    <FlagIcon className={"w-[30px] h-[30px]"}/>
                    <p className="text-gray-600 dark:text-white">
                        <strong className="text-gray-800 dark:text-blue-400">Nationality:</strong>{" "}
                        French | Canadian
                    </p>
                </div>
            </CardBody>
        </Card>
    );
};
