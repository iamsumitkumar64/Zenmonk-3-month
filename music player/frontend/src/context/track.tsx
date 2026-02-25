'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AudioPlayerContextType {
    audioUrl: string | null;
    nextTrack: string | null;
    prevTrack: string | null;
    setAudioUrl: (url: string | null) => void;
    setNextTrack: (url: string | null) => void;
    setPrevTrack: (url: string | null) => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export function useAudioPlayer() {
    const context = useContext(AudioPlayerContext);
    if (context === undefined) {
        throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
    }
    return context;
}

export function AudioPlayerProvider({ children }: { children: ReactNode }) {
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const [nextTrack, setNextTrack] = useState<string | null>(null);
    const [prevTrack, setPrevTrack] = useState<string | null>(null);

    return (
        <AudioPlayerContext.Provider value={{ audioUrl, nextTrack, prevTrack, setAudioUrl, setNextTrack, setPrevTrack }}>
            {children}
        </AudioPlayerContext.Provider>
    );
}
