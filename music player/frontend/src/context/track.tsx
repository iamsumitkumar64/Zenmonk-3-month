'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AudioPlayerContextType {
    audioUrl: string | null;
    audioList: any;
    setAudioUrl: (url: string | null) => void;
    setAudioList: (url: any ) => void;
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
    const [audioList, setAudioList] = useState<string | null>(null);

    return (
        <AudioPlayerContext.Provider value={{ audioUrl,audioList, setAudioUrl,setAudioList}}>
            {children}
        </AudioPlayerContext.Provider>
    );
}
