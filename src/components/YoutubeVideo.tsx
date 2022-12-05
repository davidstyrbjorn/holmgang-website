import React from "react";
import YouTube from "react-youtube";

type Props = {
    video_id: string;
};

const YoutubeVideo = (props: Props) => {
    const onPlayHandle = () => {
        console.log("KRYSTA");
    };

    return (
        <iframe
            className="w-full aspect-video shadow-2xl shadow-holmgang-green border-solid border-2 border-holmgang-green"
            src={props.video_id}
            title="HOLMGANG - Teaser Screencast | TDDD23 project"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            onClick={onPlayHandle}
        ></iframe>
    );
};

export default YoutubeVideo;
