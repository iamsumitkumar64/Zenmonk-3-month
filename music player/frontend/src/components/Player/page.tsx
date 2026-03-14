'use client';
import { useEffect, useState, useRef } from 'react';
import './player.css'
import { useAudioPlayer } from '@/context/track';
import { generateRandom3DigitNumberUtil } from '@/utils/random';
import { useSnackbar } from 'notistack';
import Image from 'next/image';
import { timeConversionUtil } from '@/utils/time.conversion';

export default function PlayerComp() {
    const { audioUrl,audioList, setAudioUrl } = useAudioPlayer();
    const [img, setImg] = useState<string>('');
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const { enqueueSnackbar } = useSnackbar();
    const [currentTime, setcurrentTime] = useState<any>(0);
    const [duration, setduration] = useState<any>(0);

    useEffect(() => {
        const random = generateRandom3DigitNumberUtil();
        setImg(`https://picsum.photos/${random}/${random}.jpg`);
        setIsPlaying(false);
        enqueueSnackbar("Audio Selected =>" + audioUrl, { variant: "success" });
        setcurrentTime(timeConversionUtil(100.493063));
        setduration(timeConversionUtil(100.493063));
    }, [audioUrl]);

    const togglePlay = () => {
        if (!audioRef.current) return;
        setcurrentTime(timeConversionUtil(audioRef.current.currentTime));
        setduration(timeConversionUtil(audioRef.current.duration));
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    if (!audioUrl) {
        enqueueSnackbar("No Audio right now =>" + audioUrl, { variant: "error" });
        return "Select Song First";
    }

    const changeAudio = (direction: number) => {
        const currIndex=audioList.indexOf(audioUrl);
        if(direction==1){
            if(currIndex==0){
                setAudioUrl(audioList[audioList.length-1]);
            }else{
                setAudioUrl(audioList[currIndex-1]);
            }
        } else{
            if(currIndex==audioList.length-1){
                setAudioUrl(audioList[0]);
            }else{
                setAudioUrl(audioList[currIndex+1]);
            }
        }
    }

    return (
        <div className='div'>
            <img src={img} alt="Album Art" />
            <li>
                <audio ref={audioRef} src={'/uploads/' + audioUrl} />
                <p>{audioUrl}</p>
                <div>
                    <p>{currentTime}</p>
                    <p>{duration}</p>
                </div>
                <div className="controls">
                    <button onClick={() => changeAudio(1)} className='.specificButton'>
                        <Image
                            src="/prev_track.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </button>
                    <button onClick={togglePlay} className='.specificButton'>
                        {!isPlaying ? <Image
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
                    <button onClick={() => changeAudio(2)} className='.specificButton'>
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
