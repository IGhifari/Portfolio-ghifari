import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { AiOutlineArrowsAlt } from "react-icons/ai";
import './components.css';

const SoundButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showMinPlayer, setShowMinPlayer] = useState(true);
    const audioRef = useRef(new Audio('sound2.mp3'));
    const playerRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = true;
        audio.volume = 0.5;

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    const toggleSound = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
        setShowMinPlayer(!showMinPlayer);
    };

    return (
        <div ref={playerRef} className="fixed top-24 right-5 z-40">
            {/* Minimized Player */}
            {showMinPlayer && (
                <div 
                    onClick={toggleExpand}
                    className="flex items-center gap-3 p-2 rounded-xl bg-black/80 backdrop-blur-lg border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 cursor-pointer group animate-fadeIn"
                >
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                        <img 
                            src="sound1.jpg" 
                            alt="Album Cover" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col pr-2">
                        <span className="text-sm text-white font-medium">Hotel Ugly</span>
                        <span className="text-xs text-gray-400">Shut up My Moms Calling</span>
                    </div>
                </div>
            )}

            {/* Expanded Player */}
            {isExpanded && (
                <div className="absolute top-0 right-0 w-56 bg-black/90 backdrop-blur-md rounded-2xl border border-cyan-500/30 animate-slideDown">
                    <div className="relative p-6">
                        <div className="flex flex-col h-80 items-center gap-6">
                            <div className="relative w-full h-64 rounded-sm overflow-hidden shadow-2xl">
                                <img 
                                    src="sound1.jpg" 
                                    alt="Album Cover" 
                                    className={`w-72 h-40  object-cover ${isPlaying ? 'animate-pulse-slow' : ''}`}
                                />
                            <button 
                                onClick={toggleExpand}
                                className="absolute -top-1 -right-1 p-1 text-gray-900 hover:text-gray-400 transition-all ease-in-out "
                            >
                                <AiOutlineArrowsAlt size={30} />
                            </button>
                            </div>

                            <div className="text-center -top-32">
                                <h2 className="text-2xl font-bold text-white mb-1">Hotel Ugly</h2>
                                <p className="text-gray-400">Shut up My Moms Calling</p>
                            </div>

                            <button
                                onClick={toggleSound}
                                className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-400 hover:bg-cyan-300 transition-colors"
                            >
                                {isPlaying ? (
                                    <FaPause className="text-black w-6 h-6" />
                                ) : (
                                    <FaPlay className="text-black w-6 h-6 ml-1" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SoundButton;