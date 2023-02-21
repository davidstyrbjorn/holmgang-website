import React from "react";
import YoutubeVideo from "../components/YoutubeVideo";

type Props = {};

const Trailer: React.FunctionComponent = (props: Props) => {
    return (
        <div className="pt-8 p-8 w-full flex flex-col">
            <h2 className="text-center">Trailer</h2>
            <YoutubeVideo video_id="https://www.youtube.com/embed/kzMqL4GRNqQ" />
        </div>
    );
};

export default Trailer;
