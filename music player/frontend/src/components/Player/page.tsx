'use client';
import { useEffect, useState, useRef } from 'react';
import './player.css'
import { useAudioPlayer } from '@/context/track';
import { generateRandom3DigitNumber } from '@/utils/random';
import { useSnackbar } from 'notistack';
import Image from 'next/image';

export default function PlayerComp() {
    const { audioUrl, nextTrack, prevTrack, setAudioUrl } = useAudioPlayer();
    const [img, setImg] = useState<string>('');
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const random = generateRandom3DigitNumber();
        setImg(`https://picsum.photos/${random}/${random}.jpg`);
        setIsPlaying(false);
        enqueueSnackbar("Audio Selected =>" + audioUrl, { variant: "success" });
    }, [audioUrl]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    if (!audioUrl) return <>No Files Exists ...</>

    const changeAudio = (url: string | null) => {
        setAudioUrl(url);
    }

    return (
        <div className='div'>
            <img src={img} alt="Album Art" />
            <li>
                <audio ref={audioRef} src={'/uploads/' + audioUrl} />
                <p>{audioUrl}</p>
                <div className="controls">
                    <button onClick={() => changeAudio(prevTrack)}>
                        <Image
                            src="/prev_track.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </button>
                    <button onClick={togglePlay}>
                        {isPlaying ? <Image
                            src="/play.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        /> : <Image
                            src="/pause.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />}
                    </button>
                    <button onClick={() => changeAudio(nextTrack)}>
                        <Image
                            src="/next_track.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </button>
                </div>
            </li>
        </div>
    );
}
