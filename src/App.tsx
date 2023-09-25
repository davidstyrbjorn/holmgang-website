import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Trailer from "./sections/Trailer";
import Game from "./sections/Game";
import Items from "./sections/Items";
import About from "./sections/About";

import "./index.css";
import GameplayTrailer from "./sections/GameplayTrailer";
import ThePlan from "./sections/ThePlan";
import Footer from "./sections/Footer";

export function App() {
    return (
        <>
            <Hero />
            <div className="w-full place-items-center bg-holmgang-dark text-holmgang-beige">
                <div className="md:container md:mx-auto mx-auto text-holmgang-beige content-div">
                <div id="iframe-wrap">
                    <iframe id="big-frame" className="m-auto" src="https://store.steampowered.com/widget/2403380/" width="646" height="190"></iframe>
                    
                    <div id="small-steamlink">
                        <h3>ATGANGA: Spectacle for the Gods</h3>
                        <p>
                            Coming soon &nbsp;
                            <a href="https://store.steampowered.com/app/2403380/ATGANGA_Spectacle_for_the_Gods/" target="_blank">Wishlist on Steam</a>
                        </p>
                    </div>
                </div>
                    <Trailer />
                    <Game />
                    <Items />
                    <About />
                    <GameplayTrailer />
                    <ThePlan />
                </div>
                <Footer />
            </div>
        </>
    );
}
