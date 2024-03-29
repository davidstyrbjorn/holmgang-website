import React from "react";
import screenshot1 from "../assets/holmgang1.jpg";
import screenshot2 from "../assets/holmgang2.jpg";
import screenshot3 from "../assets/holmgang3.jpg";
import screenshot4 from "../assets/holmgang4.jpg";
// Using tailwindcss

type Props = {};

const Game: React.FunctionComponent = (props: Props) => {
    return (
        <div className="flex justify-between pt-24 w-full flex-wrap">
            <div className="flex flex-col justify-center p-8">
                <h2 className="">The Game</h2>
                <p className="">
                    Gather your friends and get ready to impress the norse gods
                    in ATGANGA: Spectacle for the Gods. Master combat and
                    movement to become the last viking standing each round and
                    ensure your victory. It will be no easy task, as the fickle
                    gods will try to skew the match in favor of the underdog
                    during specific rounds known as draft rounds.
                </p>
            </div>

            <div className="min-w-1/2 max-w-full p-8">
                <div className="flex w-1/2 pr-2 pb-4">
                    <img
                        className="object-contain shadow-lg shadow-holmgang-green"
                        src="https://i.imgur.com/GwXXgQr.jpg"
                    />
                    <div className="m-2"></div>
                    <img
                        className="object-contain shadow-lg shadow-holmgang-green"
                        src="https://i.imgur.com/T7wCRZU.jpg"
                    />
                </div>
                <div className="flex w-1/2 pr-2">
                    <img
                        className="object-contain shadow-lg shadow-holmgang-green"
                        src="https://i.imgur.com/ZMhuDbW.jpg"
                    />
                    <div className="p-2"></div>
                    <img
                        className="object-contain shadow-lg shadow-holmgang-green"
                        src="https://i.imgur.com/7DLaMHS.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Game;
