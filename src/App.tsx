import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Trailer from "./sections/Trailer";
import Game from "./sections/Game";
import Items from "./sections/Items";
import About from "./sections/About";
import "./index.css";
import GameplayTrailer from "./sections/GameplayTrailer";
import ThePlan from "./sections/ThePlan";

export function App() {
    return (
        <>
            <Hero />
            <div className="w-full place-items-center bg-holmgang-dark">
                <div className="md:container md:mx-auto mx-auto text-holmgang-beige">
                    <Trailer />
                    <Game />
                    <Items />
                    <About />
                    <GameplayTrailer />
                    <ThePlan />
                </div>
            </div>
        </>
    );
}
