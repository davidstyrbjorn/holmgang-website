import React from "react";
import { Developer } from "../types";

type Props = {
    dev: Developer;
};

const Dev: React.FunctionComponent<Props> = (props: Props) => {
    const onDevHandle = () => {
        window.open(props.dev.link);
    };

    return (
        <div className="pt-8 flex-1 flex-col custom-dev-width">
            <div className="flex flex-col justify-center p-8">
                <h3
                    className="hover:underline cursor-pointer w-fit"
                    onClick={onDevHandle}
                >
                    {props.dev.name}
                </h3>
                <h4>{props.dev.title}</h4>
                <p>{props.dev.description}</p>
            </div>
        </div>
    );
};

export default Dev;
