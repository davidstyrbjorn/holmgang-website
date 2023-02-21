import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
        image: "https://i.imgur.com/eUEdpmY.png",
    },
    {
        date: "November 17, 2022",
        title: "LIU GAME CONFERENCE",
        text: `
            At LiU Game Awards we placed 2nd overall. We also presented at 
            the exhibition with great feedback from all the attendees and
            finished 'phase 1' of development with plans to continue 
            development and with lots of new contacts made.
        `,
        image: "https://i.imgur.com/x7OkgFQ.jpg",
    },
    {
        date: "January, 2023",
        title: "Enter East Sweden Game",
        text: `
            At the beginning of the new year we put our focus on reworking our code and UI to prepare the game
            for the massive amounts of new features we want to add. 
            Development moved to the offices at coffice provided to us be the ESG collective, where we plan to conitnue development. 
        `,
        image: "https://i.imgur.com/iaobo2w.jpg",
    },
    {
        date: "February 2023 and ahead",
        title: "Full Speed Ahead",
        text: `
            Right now we are deep in the trenches designing new items, implementing new features and developing the best possible game to our abilities.
            We also want to start establish a following which will begin at Närcon Winter where we will be part of the indie game exhibition, an opportunity provided to us by ESG.
        `,
        image: "https://i.imgur.com/5SVqPcA.png",
    },
    {
        date: "",
        title: "Future",
        text: `
            At StoneTech Games, our ultimate goal is to create the most fun and engaging couch party game 
            that players all over the world can't get enough of. We don't know what the future holds, 
            but we're dreaming big - our vision is to turn StoneTech Games into a full-time studio so 
            we can continue crafting fun, engaging experiences like Atganga and beyond. Who knows, 
            maybe one day StoneTech Games will be known as the go-to studio for crafting fun and engaging 
            games that bring people together. 
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
                                <p className="pb-8">{entry.text}</p>
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
