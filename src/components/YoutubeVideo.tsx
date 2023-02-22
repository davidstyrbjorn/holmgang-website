import React from "react";
import YouTube from "react-youtube";

type Props = {
    video_id: string;
};

const YoutubeVideo = (props: Props) => {
    return (
        <iframe
            className="w-full aspect-video shadow-2xl shadow-holmgang-green border-solid border-2 border-holmgang-green"
            src={props.video_id}
            title="ATGANGA Gameplay"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            // loading="lazy"
        ></iframe>
    );
};

export default YoutubeVideo;
