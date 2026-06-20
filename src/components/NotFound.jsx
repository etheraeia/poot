import React from 'react';
import { Link } from 'react-router-dom';
import { TransitionLink } from "./TransitionLink";

const NotFound = () => (
    <main className="flex flex-col min-h-screen bg-[url('./404_fishing.png')] bg-cover bg-center justify-center bg-[#fffbf1] gap-4 px-[15vw] items-end">
        <p
            style={{ fontFamily: "IBM Plex Mono" }}
            className={`flex flex-col text-8xl text-right font-light tracking-tighter text-[#1029b4]`}
        >
            404
        </p>
        <div className="flex flex-col gap-8 items-start">
            <h2
                style={{ fontFamily: "ivypresto-display, serif" }}
                className="text-[#1029b4] font-thin font-serif text-7xl md:text-[8dvw] sm:text-8xl"
            >
                Gone Fishing
            </h2>
            <div style={{ fontFamily: "epilogue, sans-serif" }}
                className="flex flex-col text-[#19255c] font-light text-left tracking-tighter text-2xl gap-1">
                <p>
                    sorry, this page doesn't exist :(
                </p>
                <TransitionLink to="/" className="underline">
                    go home?
                </TransitionLink>
            </div>
        </div>
    </main>
);
export default NotFound;