import React from "react";
import screenshot1 from "../assets/holmgang1.png";
import screenshot2 from "../assets/holmgang2.png";
import screenshot3 from "../assets/holmgang3.png";
import screenshot4 from "../assets/holmgang4.png";
// Using tailwindcss

type Props = {};

const Game: React.FunctionComponent = (props: Props) => {
    return (
        <div className="flex justify-between pt-24 w-full flex-wrap">
            <div className="flex flex-col justify-center p-8">
                <h2 className="">The Game</h2>
                <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    condimentum lectus a lacus aliquam rutrum. Maecenas placerat
                    interdum iaculis. Etiam vel arcu volutpat quam dignissim
                    varius. Aliquam eu aliquam massa. Etiam imperdiet efficitur
                    tempor. Donec pharetra urna cursus purus bibendum, at
                    suscipit lectus pharetra. Vivamus tincidunt, turpis eu
                </p>
            </div>

            <div className="min-w-1/2 max-w-full p-8">
                <div className="flex w-1/2 pr-2 pb-4">
                    <img
                        className="object-contain shadow-lg shadow-holmgang-green"
                        src={screenshot1}
                    />
                    <div className="m-2"></div>
                    <img
                        className="object-contain shadow-lg shadow-holmgang-green"
                        src={screenshot2}
                    />
                </div>
                <div className="flex w-1/2 pr-2">
                    <img
                        className="object-contain shadow-lg shadow-holmgang-green"
                        src={screenshot3}
                    />
                    <div className="p-2"></div>
                    <img
                        className="object-contain shadow-lg shadow-holmgang-green"
                        src={screenshot4}
                    />
                </div>
            </div>
        </div>
    );
};

export default Game;
