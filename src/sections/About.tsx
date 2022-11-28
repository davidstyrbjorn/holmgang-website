import React from "react";
import Dev from "./Dev";
// Using tailwindcss

import developers from "../developers.json";
import { Developer } from "../types";

type Props = {};

const About: React.FunctionComponent = (props: Props) => {
    let devs: Developer[] = developers as Developer[];

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
                <Dev dev={devs[0]} />
                <Dev dev={devs[1]} />
            </div>
            <div className="flex  justify-center min-w-96">
                <Dev dev={devs[1]} />
                <Dev dev={devs[1]} />
            </div>
        </div>
    );
};

export default About;
