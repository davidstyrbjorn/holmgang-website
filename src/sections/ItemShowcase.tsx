import React, { useState } from "react";

import PoisonDagger from "../assets/PoisonDagger.mp4";
import ChillingGrace from "../assets/ChillingGrace.mp4";
import Muninn from "../assets/Munnin.mp4";
import ChargedAmmunition from "../assets/ChargedAmmo.mp4";
import BuffetofSouls from "../assets/BuffetOfSouls.mp4";

import triangle from "../assets/Timer Triangle.png";

import PoisonDaggerIcon from "../assets/poison dagger.png";
import ChillingGraceIcon from "../assets/chilling grace.png";
import MuninnIcon from "../assets/muninn.png";
import ChargedAmmunitionIcon from "../assets/charged ammunition.png";
import BuffetofSoulsIcon from "../assets/buffet of souls.png";

type Props = {
    isSelected: boolean;
    index: number;
    name: string;
    image: string;
    handleClick: (index: number) => void;
};

const items = [
    {
        name: "Poison Dagger",
        description:
            "Loki is the god of Trickery and an item that enforces his personality trait is Poison Dagger. Poison Dagger is an Active item a player can throw across the map. It has a low cooldown and any foes that are in its way will be poisoned. Enemies will find it hard to evade such a fast projectile and getting hit by it stings!",
        image: PoisonDaggerIcon,
        gif: PoisonDagger,
    },
    {
        name: "Chilling Grace",
        description:
            "Skadi has given us the power to dash with the winds of winter. This passive item enhances your dash ability and lets you dash further and also apply frost to your passed through opponents! Frost is an effective way of controlling your opponents, slowing them down so they can no longer keep up with you!",
        image: ChillingGraceIcon,
        gif: ChillingGrace,
    },
    {
        name: "Muninn",
        description:
            "Odin has given us permission to use his beloved raven Muninn in battle. Muninn is an Active item that allows us to place Muninn on the map. Then, when you need to flee or see an advantageous opportunity you can reactivate Muninn and teleport to his location. Use Muninn's powers wisely!",
        image: MuninnIcon,
        gif: Muninn,
    },
    {
        name: "Charged Ammunition",
        description:
            "Thor lets us channel his ability to spread lighting and thunder among his enemies. With the Passive item Charged Ammunition, players can apply Static with a hit of any projectile to their opponents, creating a chain of lighting between enemies. Used with thought it can be devastating to the battlefield.",
        image: ChargedAmmunitionIcon,
        gif: ChargedAmmunition,
    },
    {
        name: "Buffet of Souls",
        description:
            "Being a servant of Hel can be exhausting, but Buffet of Souls might make it seem worth it. Buffet of Souls is a passive item that lets you feast on souls when in a pinch, giving you back some health! Souls can be gathered from defeated enemies and with this item gives you great sustainability in battle!",
        image: BuffetofSoulsIcon,
        gif: BuffetofSouls,
    },
];

const Item = (props: Props) => {
    return (
        <div
            className={
                !props.isSelected
                    ? "flex-1  max-w-icon align-center transform scale-75"
                    : "align-center max-w-icon flex-1 rounded-t-lg"
            }
            onClick={() => props.handleClick(props.index)}
        >
            <img className="" src={props.image} />
            {
                <img
                    className="m-auto"
                    style={
                        props.isSelected
                            ? {
                                  maxWidth: 30,
                                  transform:
                                      "scale(2.5,2.5) translate(0px,10px)",
                              }
                            : { maxWidth: 30, opacity: 0 }
                    }
                    src={triangle}
                />
            }
        </div>
    );
};

const ItemShowcase = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const handleSelect = (index: number) => {
        setSelectedItem(index);
    };
    return (
        <div className="overflow-hidden">
            <div className="flex justify-between">
                {items.map((item, index) => {
                    return (
                        <Item
                            isSelected={index == selectedItem}
                            key={index}
                            index={index}
                            name={item.name}
                            image={item.image}
                            handleClick={handleSelect}
                        />
                    );
                })}
            </div>
            <div className=" min-h-full bg-holmgang-green flex p-4 m-4 flex-wrap justify-center rounded-3xl ">
                <div className="bg-holmgang-green flex-1 p-4 flex flex-col justify-center ">
                    <h3>{items[selectedItem].name}</h3>
                    <p className="">{items[selectedItem].description}</p>
                </div>
                {/* <div className="flex-1 min-w-50 flex justify-center overflow-hidden">
                    <video
                        style={{
                            width: "100%",
                            margin: "24px",
                            maxWidth: "80%",
                        }}
                        className="shadow-2xl border-solid border-8 border-holmgang-dark"
                        autoPlay
                    >
                        <source
                            src={items[selectedItem].gif}
                            type="video/mp4"
                        />
                    </video>
                </div> */}
            </div>
        </div>
    );
};

export default ItemShowcase;
