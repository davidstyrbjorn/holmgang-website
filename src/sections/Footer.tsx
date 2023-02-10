import React from "react";
import { FaTwitter, FaYoutube } from "react-icons/fa";

import logo from "../assets/logo.png";
import useWindowDimensions from "../useWindowDimensions";

const Footer: React.FC = () => {
    const windowSize = useWindowDimensions();
    const onClickTwitter = () => {
        window.open("https://twitter.com/HolmgangTheGame", "_blank");
    };

    const onClickYoutube = () => {
        window.open("https://www.youtube.com/@HolmgangTheGame", "_blank");
    };

    let flexBehaviour = windowSize.width < 950 ? "flex-col gap-8 pb-8" : "";

    return (
        <div
            className={
                "flex w-screen max-w-full justify-center bg-holmgang-green items-center " +
                flexBehaviour
            }
        >
            <div className="w-96">
                <img src={logo}></img>
            </div>
            <div className="my-auto w-96">
                <p className="text-center text-3xl pb-2">Email</p>
                <p className="text-center text-sm">holmgangthegame@gmail.com</p>
            </div>
            <div className="my-auto flex gap-8 w-96 justify-center">
                <FaTwitter
                    onClick={onClickTwitter}
                    className="cursor-pointer  transition-transform hover:scale-105"
                    size="3em"
                />
                <FaYoutube
                    className="cursor-pointer  transition-transform hover:scale-105"
                    onClick={onClickYoutube}
                    size="3em"
                />
            </div>
        </div>
    );
};

export default Footer;
