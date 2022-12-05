import React from "react";
import YoutubeVideo from "../components/YoutubeVideo";

type Props = {};

const GameplayTrailer = (props: Props) => {
    return (
        <div className="pt-8 p-8 w-full flex flex-col">
            <h2 className="text-center">Full Gameplay Showcase</h2>
            <YoutubeVideo video_id="https://www.youtube.com/embed/0Um8A-RA5HA" />
        </div>
    );
};

export default GameplayTrailer;
