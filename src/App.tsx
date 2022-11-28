import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Trailer  from "./sections/Trailer";
import Game     from "./sections/Game";
import Items    from "./sections/Items";
import About    from "./sections/About";
import "./index.css";
import arrow from "./assets/arrow.png";

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
                </div>
            </div>
        </>
    );
}
