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
            className="fixed top-0 right-0 font-nordicablack text-holmgang-beige p-2 rounded-lg hover:text-gray cursor-pointer"
            onClick={handleMute}
        >
            {props.muted ? "UNMUTE" : "MUTE"}
        </div>
    );
};

export default MuteButton;
