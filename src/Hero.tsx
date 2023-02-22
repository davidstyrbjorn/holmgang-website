import { PointMaterial, Points, Cloud } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { random } from "maath";
import MuteButton from "./MuteButton";
import muteAtom from "./atoms/mute";
import { useAtom } from "jotai";
import useWindowDimensions from "./useWindowDimensions";
import title from "./assets/atganga_logo.svg";

type Props = {};

const Clouds: React.FC = () => {
    const [cloudOpacity, setCloudOpacity] = useState(0.0);
    const timeTracker = useRef(0.0);

    // useFrame((_state, delta, _xrFrame) => {
    //     if (timeTracker.current < 0.25) {
    //         timeTracker.current += delta;
    //         return;
    //     }
    //     if (cloudOpacity < 0.2) setCloudOpacity(cloudOpacity + 0.05 * delta);
    // });

    return (
        <>
            {/* <Cloud
                position={[-20, -6, -25]}
                speed={0.2}
                opacity={cloudOpacity}
            />
            <Cloud
                position={[8, -8, -15]}
                speed={-0.2}
                opacity={cloudOpacity}
            />
            <Cloud
                position={[-8, -8, -25]}
                speed={0.2}
                opacity={cloudOpacity}
            />
            <Cloud
                position={[20, -6, -15]}
                speed={-0.2}
                opacity={cloudOpacity}
            />
            <Cloud
                position={[0, -12, -15]}
                speed={-0.2}
                opacity={cloudOpacity}
            />
            <Cloud
                position={[-8, -8, -10]}
                speed={0.2}
                opacity={cloudOpacity}
            />
            <Cloud position={[8, -8, -5]} speed={-0.2} opacity={cloudOpacity} />
            <Cloud position={[-8, -8, 0]} speed={0.2} opacity={cloudOpacity} /> */}
        </>
    );
};

const Hero: React.FunctionComponent = (props: Props) => {
    const audio = useRef<HTMLAudioElement>();
    // const [muted, setMuted] = useAtom(muteAtom);

    // useEffect(() => {
    //     if (!audio.current) return;
    //     if (muted) audio.current.volume = 0;
    //     else audio.current.volume = 0.5;

    //     if (!muted && audio.current.paused) {
    //         audio.current.play();
    //     }
    // }, [muted]);

    return (
        <div className="w-screen max-w-full flex flex-col  custom-hero-height overflow-hidden">
            <div className="w-full h-screen absolute bg-holmgang-green -z-20"></div>
            <div className="m-auto relative w-full">
                <div className=" w-full overflow-hidden">
                    <h1 className="text-holmgang-beige text-center font-nordicathin text-md w-full pt-8">
                        StoneTech Games Presents
                    </h1>
                    <img
                        src="https://i.imgur.com/Maxr5oN.png"
                        className="m-auto text-title title-text"
                        alt="title"
                    />

                    {/* <img src={title} className="m-auto text-title title-text max-w-desktop" /> */}
                    {/* <h1 className="text-holmgang-beige text-center font-runytunes text-title title-text -mt-8">
                        ATGANGA
                    </h1> */}
                </div>
            </div>

            {/* <Canvas
                camera={{ position: [0, 0, 6] }}
                className="canvas custom-hero-height mt-8 -z-10"
            >
                <ambientLight />
                <Suspense fallback={null}>
                    {windowSize.width > 800 && <Clouds />}
                </Suspense>
            </Canvas> */}
        </div>
    );
};

export default Hero;
