import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Trailer from "./sections/Trailer";
import Game from "./sections/Game";
import "./index.css";
import arrow from "./assets/arrow.png";

export function App() {
    return (
        <>
            <Hero />

            <div className="w-full place-items-center bg-holmgang-dark">
                <div className="m-auto container xl text-holmgang-beige">
                    <Trailer />
                    <Game />
                </div>
            </div>
        </>
    );
}
