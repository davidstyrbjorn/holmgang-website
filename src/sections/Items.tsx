import React from "react";
import itembar from "../assets/itembar.svg";
// Using tailwindcss

type Props = {};

const Items: React.FunctionComponent = (props: Props) => {
    return (
        <div className="pt-24 w-full h-full flex-wrap overflow-hidden">
            <div className="flex flex-col justify-center p-8">
                <h2 className="">Items</h2>
                <p className="">
                    During draft rounds, you and your friends will be presented
                    with some gifts to change up the game. Each player gets to
                    choose one unique artifact bestowed by Hel, Loki, Thor,
                    Skadi or Odin to cater to their own fighting style. By being
                    strategic with your choice and picking artifacts that
                    synergize well, you can change the game in your favor. With
                    50+ artifacts in the pool of possible artifacts, no match is
                    the same in Holmgang.
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
