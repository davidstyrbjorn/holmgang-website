import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Trailer from "./sections/Trailer";
import Game from "./sections/Game";
import Items from "./sections/Items";
import About from "./sections/About";
import ItemShowcase from "./sections/ItemShowcase";
import "./index.css";
import GameplayTrailer from "./sections/GameplayTrailer";
import ThePlan from "./sections/ThePlan";
import Footer from "./sections/Footer";

export function App() {
    return (
        <>
            <Hero />
            <div className="w-full place-items-center bg-holmgang-dark text-holmgang-beige">
                <div className="md:container md:mx-auto mx-auto text-holmgang-beige">
                    <Trailer />
                    <Game />
                    <Items />
                    <ItemShowcase />
                    <About />
                    <GameplayTrailer />
                    <ThePlan />
                </div>
                <Footer />
            </div>
        </>
    );
}
