import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import screenshot1 from "../assets/early.png";
import esg from "../assets/esg.png";
import lgc from "../assets/lgc.png";
import future from "../assets/future.png";

type Props = {};

type TimelineEntry = {
    date: string;
    title: string;
    text: string;
    image?: string;
};

const timelineEntries: TimelineEntry[] = [
    {
        date: "August, 2022",
        title: "Development Began...",
        text: "with the beggining of our next to last semester at LiU we all read the course TDDD23 where we decided to begin our development",
        image: screenshot1,
    },
    {
        date: "November 17, 2022",
        title: "LIU GAME CONFERENCE",
        text: `
            Placing 2nd overall at LiU game conference where we also presented at the exhibition with great feedback from all the attendees
            we finished 'phase 1' of development. With plans to continue development and lots of new contacts made 
        `,
        image: lgc,
    },
    {
        date: "January, 2023",
        title: "Enter ESG",
        text: `
            Beginning the new year we put our focus on reworking our code and UI to prepare the game
            for the massive amounts of new features we want to add. 
            Working out from the offices at coffice provided by the ESG collective who we made contact with during 2022
        `,
        image: esg,
    },
    {
        date: "February 2023 and ahead",
        title: "Full Speed Ahead",
        text: `
            Right now we are deep in the trenches designing new items, implementing new features, developing the best possible game to our abilities.
            We also want to start establish a following which will begin at Närcon Winter where we will be part of the indie game exhibition, an opportunity provided to us by ESG.
        `,
        image: future,
    },
    {
        date: "Unknown date",
        title: "Future",
        text: `
            Our end goal is to make the ultimate couch party game that players all over the world try out and enjoy. 
            We are not sure what the future holds for StoneTech Games but our dream is to form it into serious studio where we can 
            continue developing Atganga and more games to come.
        `,
    },
];

const ThePlan = (props: Props) => {
    return (
        <div className="pt-8 w-full">
            <div className="flex flex-col justify-center p-8 pb-36">
                <h2 className="text-center">Timeline </h2>

                <VerticalTimeline lineColor="#F4F2DB">
                    {timelineEntries.map((entry, idx) => {
                        return (
                            <VerticalTimelineElement
                                key={idx}
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: "#28250F",
                                    color: "#fff",
                                }}
                                contentArrowStyle={{
                                    borderRight: "10px solid  #28250F",
                                }}
                                date={entry.date}
                                iconStyle={{
                                    background: "#28250F",
                                    color: "#fff",
                                }}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {entry.title}
                                </h3>
                                <p>{entry.text}</p>
                                {entry.image && (
                                    <img
                                        className="object-contain shadow-lg shadow-holmgang-green"
                                        src={entry.image}
                                    />
                                )}
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default ThePlan;
