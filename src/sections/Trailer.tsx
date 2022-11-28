import React from "react";
// Using tailwindcss

type Props = {};

const Trailer: React.FunctionComponent = (props: Props) => {
    return (
        <div className="pt-8 p-8 w-full flex flex-col">
            <h2 className="text-center">Trailer</h2>
            <iframe
                className="w-full aspect-video shadow-2xl shadow-holmgang-green border-solid border-2 border-holmgang-green"
                src="https://www.youtube.com/embed/FpoYp_MGL-8"
                title="HOLMGANG - Teaser Screencast | TDDD23 project"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        </div>
    );
};

export default Trailer;
