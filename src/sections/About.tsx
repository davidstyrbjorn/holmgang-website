import React from "react";
import Dev from "./Dev"
// Using tailwindcss

type Props = {};

const About: React.FunctionComponent = (props: Props) => {
    return (
        <div className="pt-8 w-full flex flex-col">
            <div className="flex flex-col justify-center p-8">
                <h2 className="">About the devs</h2>
                <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    condimentum lectus a lacus aliquam rutrum. Maecenas placerat
                    interdum iaculis. Etiam vel arcu volutpat quam dignissim
                    varius. Aliquam eu aliquam massa. Etiam imperdiet efficitur
                    tempor. Donec pharetra urna cursus purus bibendum, at
                    suscipit lectus pharetra. Vivamus tincidunt, turpis eu
                </p>
            </div>
            <div className="flex justify-center min-w-96">
                <Dev/>
                <Dev/>
            </div>
            <div className="flex  justify-center min-w-96">
                <Dev/>
                <Dev/>
            </div>
        </div>
    );
};

export default About;
