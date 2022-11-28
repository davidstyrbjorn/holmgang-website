import React from "react";
import { Developer } from "../types";

type Props = {
    dev: Developer;
};

const Dev: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <div className="pt-8 flex flex-col">
            <div className="flex flex-col justify-center p-8">
                <h3>{props.dev.name}</h3>
                <h4>{props.dev.title}</h4>
                <p>{props.dev.description}</p>
            </div>
        </div>
    );
};

export default Dev;
