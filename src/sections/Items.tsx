import React from "react";
import itembar from "../assets/itembar.svg"
// Using tailwindcss

type Props = {};

const Items: React.FunctionComponent = (props: Props) => {
    return (
        <div className="pt-24 w-full h-full flex-wrap overflow-hidden">
            <div className="flex flex-col justify-center p-8">
                <h2 className="">Items</h2>
                <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    condimentum lectus a lacus aliquam rutrum. Maecenas placerat
                    interdum iaculis. Etiam vel arcu volutpat quam dignissim
                    varius. Aliquam eu aliquam massa. Etiam imperdiet efficitur
                    tempor. Donec pharetra urna cursus purus bibendum, at
                    suscipit lectus pharetra. Vivamus tincidunt, turpis eu
                </p>
            </div>
            {/* <div className="absolute w-full left-0 flex justify-center bg-holmgang-dark">
                <img src={itembar} alt="React Logo" className="w-full max-w-desktop "/>
            </div> */}

            <div className="flex justify-between">
                
                <div className="max-w-desktop overflow-hidden ">
                    <div className=" flex justify-center bg-holmgang-dark slide-container overflow-hidden">
                        <div className="h-96 sliding-bg overflow-hidden "></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;
