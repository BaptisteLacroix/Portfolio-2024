import { Card, CardBody } from "@nextui-org/react";
import {PolytechIcon} from "./svg/PolytechIcon.tsx";

// ExperienceCard Component
const ExperienceCard = ({ icon, title, company, description, years }) => {
    return (
        <div className="flex justify-center items-center m-5">
            <Card className="relative flex flex-row items-start p-6 space-x-6 shadow-lg bg-white rounded-xl w-2/3 overflow-visible">
                {/* Left Section with Icon */}
                <div className="absolute -left-14 top-5 z-10 bg-blue-100 p-6 rounded-full flex items-center justify-center">
                    {icon}
                </div>

                {/* Content Section */}
                <CardBody className="pl-16">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        {title}
                    </h2>
                    <p className="text-md text-gray-600">
                        {company}
                    </p>
                    <p className="text-gray-500 mt-2">
                        {description}
                    </p>
                </CardBody>

                {/* Right Section (Date) */}
                <div className="absolute top-5 right-5">
                    <span className="px-4 py-2 bg-blue-50 text-blue-500 rounded-md font-semibold">
                        {years}
                    </span>
                </div>
            </Card>
        </div>
    );
};

// Main Page Component
export const ExperienceList = () => {
    return (
        <div className="flex flex-col items-center justify-center p-6 w-full">
            {/* Experience Cards */}
            <ExperienceCard
                icon={
                    <PolytechIcon />
                }
                title="UX Designer"
                company="Vivo - Senior Designer"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum."
                years="2015 - 2018"
            />
            <ExperienceCard
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.341C20.607 15.341 21 15.714 21 17c0 1.286-.393 1.659-1.572 1.659-1.178 0-2.286-1-3.857-1S14.5 18.659 13.321 18.659C12.142 18.659 12 18.286 12 17c0-1.286 1.286-1.659 2.857-1.659 1.571 0 2.678 1 3.857 1 1.179 0 1.286-1 1.714-1z" />
                    </svg>
                }
                title="Web Developer"
                company="Oppo - HR Manager"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum."
                years="2012 - 2015"
            />
            <ExperienceCard
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c2.21 0 4-1.79 4-4S14.21 0 12 0s-4 1.79-4 4 1.79 4 4 4z" />
                    </svg>
                }
                title="Graphic Designer"
                company="Apple - Testor"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum."
                years="2012 - 2010"
            />
        </div>
    );
};
