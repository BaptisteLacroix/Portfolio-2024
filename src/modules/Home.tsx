import {
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
} from "@nextui-org/react";
import TypingAnimation from "./TypingAnimation.tsx";
import { EmailIcon } from "./icons/personalDetailsIcons/EmailIcon.tsx";
import { LanguageIcon } from "./icons/personalDetailsIcons/LanguageIcon.tsx";
import { FlagIcon } from "./icons/personalDetailsIcons/FlagIcon.tsx";
import { DownloadCVComponent } from "./DownloadCVComponent.tsx";
import { motion } from "framer-motion";

export const Home = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <>
            <div className={"home-container"}>
                <div className="min-h-[100vh] flex items-center">
                    <div className="w-1/4"></div>
                    <div>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="flex items-center m-1 border-1 w-1/3">
                                <CardHeader className="flex items-center">
                                    <Badge isInvisible={true} shape="circle">
                                        <div className="bg-blue-500 rounded-full p-1 pl-2 pr-2 text-white">
                                            Hot
                                        </div>
                                    </Badge>
                                    <div className="ml-3 text-lg font-semibold">
                                        Looking for an internship!
                                    </div>
                                </CardHeader>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Card className="shadow-none mt-8 mb-8 bg-inherit">
                                <CardHeader className="pb-0">
                                    <h1 className="text-4xl font-bold text-left">
                                        Hey I'm Baptiste Lacroix
                                    </h1>
                                </CardHeader>
                                <CardBody>
                                    <p className="text-gray-400 text-left">
                                        💬 I’m in work-study at Airbus Defense and Space and
                                        studying at Polytech Nice Sophia
                                    </p>
                                </CardBody>
                                <CardFooter>
                                    <div className="flex space-x-4">
                                        <Button color={"primary"}>
                                            <a href={`mailto:contact@baptiste-lacroix.fr?subject=${encodeURIComponent('Potential Hire')}`}>
                                                Hire Me!
                                            </a>
                                        </Button>
                                        <DownloadCVComponent variant={"bordered"} />
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        <Divider className="my-8" />

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={cardVariants}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Card className="w-full flex justify-between bg-gray-100 p-5 rounded-lg shadow-md">
                                <CardBody className="flex flex-col md:flex-row">
                                    <Card className="w-full md:w-1/2 shadow-md bg-white rounded-lg m-4 p-4">
                                        <CardHeader className="pb-0">
                                            <h1 className="text-2xl font-bold text-gray-700">
                                                Personal Details
                                            </h1>
                                        </CardHeader>
                                        <Divider className="my-3 opacity-50" />
                                        <CardBody className="space-y-4">
                                            <div className="flex items-center space-x-3">
                                                <EmailIcon className={"w-[30px] h-[30px]"} />
                                                <p className="text-gray-600">
                                                    <strong className="text-gray-800">Email:</strong>
                                                    <a href={`mailto:contact@baptiste-lacroix.fr?subject=${encodeURIComponent('Potential Hire')}`}>
                                                        {" "}
                                                        contact@baptiste-lacroix.fr{" "}
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <LanguageIcon className={"w-[30px] h-[30px]"} />
                                                <p className="text-gray-600">
                                                    <strong className="text-gray-800">Languages:</strong>{" "}
                                                    French | English - B2 - TOEIC (815)
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <FlagIcon className={"w-[30px] h-[30px]"} />
                                                <p className="text-gray-600">
                                                    <strong className="text-gray-800">Nationality:</strong>{" "}
                                                    French | Canadian
                                                </p>
                                            </div>
                                        </CardBody>
                                    </Card>

                                    <Card className="w-full shadow-none bg-white m-2">
                                        <CardHeader>
                                            <h1 className="font-semibold text-3xl">
                                                <TypingAnimation />
                                            </h1>
                                        </CardHeader>
                                        <CardBody>
                                            <div className="text-md text-left pl-2">
                                                <p>
                                                    💬 My name is Baptiste, I'm 21, I'm Franco-Canadian,
                                                    and I live in France.
                                                </p>
                                                <p>
                                                    I started programming around 2019 with Python, and now
                                                    I work on some personal and school projects.
                                                </p>
                                                <br />
                                                <p>
                                                    🎓 I'm currently studying in work-study at Polytech
                                                    Nice Sophia in computer science and Airbus Defense and
                                                    Space.
                                                </p>
                                                <p>
                                                    Before going to Polytech, I completed my BUT in
                                                    computer science at the IUT of Nice, ending at the top
                                                    of my class.
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
                        </motion.div>
                    </div>
                    <div className="w-1/6"></div>
                </div>
            </div>
        </>
    );
};
