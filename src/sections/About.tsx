import React from "react";

import Dev from "./Dev";
// Using tailwindcss

import developers from "../developers.json";
import { Developer } from "../types";

type Props = {};

const About: React.FunctionComponent = (props: Props) => {
    let devs: Developer[] = developers as Developer[];

    return (
        <div className="pt-8 w-full">
            <div className="flex flex-col justify-center p-8">
                <h2 className="">About the devs</h2>
                <p className="">
                    StoneTech Games is a team of friends that started developing
                    games together during their studies at Linköping University.
                    With a few smaller projects and gamejams under their belts
                    they are excited to create a larger, more complete
                    experience with Atganga. The name StoneTech Games comes from
                    an inside joke about a certain, very unique playstyle in
                    Atganga. Below you can find a small presentation for each
                    individual StoneTech Games developer.
                </p>
            </div>
            <div className="flex justify-center flex-row flex-wrap min-w-fit w-full">
                <Dev dev={devs[0]} />
                <Dev dev={devs[1]} />
            </div>
            <div className="flex  justify-center flex-wrap">
                <Dev dev={devs[2]} />
                <Dev dev={devs[3]} />
            </div>
        </div>
    );
};

export default About;
