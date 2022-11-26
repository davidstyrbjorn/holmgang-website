import React from "react";

type Props = {
    muted: boolean;
    setMuted: React.Dispatch<React.SetStateAction<boolean>>;
};

const MuteButton = (props: Props) => {
    const handleMute = () => {
        props.setMuted(!props.muted);
    };

    return (
        <div
            className="fixed top-5 right-5 font-nordicablack text-holmgang-beige bg-black p-5 rounded-lg hover:bg-gray cursor-pointer"
            onClick={handleMute}
        >
            {props.muted ? "UNMUTE" : "MUTE"}
        </div>
    );
};

export default MuteButton;
