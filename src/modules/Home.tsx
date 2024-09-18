import {
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader, Divider,
} from "@nextui-org/react";
import TypingAnimation from "./TypingAnimation.tsx";
import {EmailIcon} from "./svg/EmailIcon.tsx";
import {LanguageIcon} from "./svg/LanguageIcon.tsx";
import {FlagIcon} from "./svg/FlagIcon.tsx";


export const Home = () => {
    return (
        <>
            <div className={"home-container"}>
                <div className="min-h-[100vh] flex items-center">
                    {/* Optional empty space on the left */}
                    <div className="w-1/4"></div>
                    <div>
                        {/* First Card (Looking for Internship) */}
                        <Card className="w-full flex items-center m-1 border-1 w-1/3">
                            <CardHeader className="flex items-center">
                                <Badge isInvisible={true} shape="circle">
                                    <div className="bg-blue-500 rounded-full p-1 pl-2 pr-2 text-white">
                                        Hot
                                    </div>
                                </Badge>
                                <div className="ml-3 text-lg font-semibold">Looking for an internship !</div>
                            </CardHeader>
                        </Card>

                        {/* Second Card (Profile Header with Buttons) */}
                        <Card className="shadow-none mt-8 mb-8 bg-inherit">
                            <CardHeader className="pb-0">
                                <h1 className="text-4xl font-bold text-left">Hey I'm Baptiste Lacroix</h1>
                            </CardHeader>
                            <CardBody>
                                <p className="text-gray-400 text-left">
                                    💬 I’m in work-study at Airbus Defense and Space and studying at Polytech Nice Sophia
                                </p>
                            </CardBody>
                            <CardFooter>
                                <div className="flex space-x-4">
                                    <Button color="primary">Hire Me</Button>
                                    <Button color="primary" variant="bordered">Download CV</Button>
                                </div>
                            </CardFooter>
                        </Card>

                        {/* Add Divider for separation */}
                        <Divider className="my-8"/>

                        {/* Third Card (Details and Info Section) */}
                        <Card className="w-full flex justify-between bg-gray-100 p-5 rounded-lg shadow-md">
                            <CardBody className="flex flex-col md:flex-row">
                                {/* Personal Details */}
                                <Card className="w-full md:w-1/2 shadow-md bg-white rounded-lg m-4 p-4">
                                    <CardHeader className="pb-0">
                                        <h1 className="text-2xl font-bold text-gray-700">Personal Details</h1>
                                    </CardHeader>
                                    <Divider className="my-3 opacity-50"/>
                                    <CardBody className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                            <EmailIcon className={"w-[30px] h-[30px]"}/>
                                            <p className="text-gray-600">
                                                <strong className="text-gray-800">Email:</strong> mail@mail.com
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <LanguageIcon className={"w-[30px] h-[30px]"}/>
                                            <p className="text-gray-600">
                                                <strong className="text-gray-800">Languages:</strong> French | English -
                                                TOEIC (815)
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <FlagIcon className={"w-[30px] h-[30px]"}/>
                                            <p className="text-gray-600">
                                                <strong className="text-gray-800">Nationality:</strong> French |
                                                Canadian Citizen
                                            </p>
                                        </div>
                                    </CardBody>
                                </Card>

                                {/* Description Section */}
                                <Card className="w-full shadow-none bg-white m-2">
                                    <CardHeader>
                                        <h1 className="text-xl font-semibold"><TypingAnimation/></h1>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="text-md text-left pl-2">
                                            <p>
                                                💬 My name is Baptiste, I'm 21, Im Franco-Canadian and I live in France.
                                            </p>
                                            <p>
                                                I started programming around 2019 with Python and now I work on some
                                                personal and school projects.
                                            </p>
                                            <br/>
                                            <p>
                                                🎓 I'm currently studying in work-study at Polytech Nice Sophia in
                                                computer science and Airbus Defense and Space.
                                            </p>
                                            <p>
                                                Before going to Polytech, I completed my BUT in computer science at the
                                                IUT of Nice ending at the top of my class.
                                            </p>
                                        </div>
                                    </CardBody>
                                    <CardFooter className="text-right">
                                        <h2 className="font-signature text-3xl text-gray-800 italic">
                                            Baptiste Lacroix
                                        </h2>
                                    </CardFooter>
                                </Card>
                            </CardBody>
                        </Card>
                    </div>
                    {/* Empty space on the right */}
                    <div className="w-1/6"></div>
                </div>
            </div>
        </>
    );
}
