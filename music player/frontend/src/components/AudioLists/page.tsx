'use client';
import { useState, useEffect } from 'react';
import './list.css'
import { useAudioPlayer } from '@/context/track';
import { useSnackbar } from 'notistack';

export default function AudioListsComp() {
    const [audioFiles, setAudioFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { setAudioUrl, setNextTrack, setPrevTrack } = useAudioPlayer();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        async function fetchAudioFiles() {
            try {
                const response = await fetch('/api/audio-files');
                if (!response.ok) {
                    throw new Error('Failed to fetch audio files');
                }
                const data = await response.json();
                setAudioFiles(data.files);
                setAudioUrl(data?.files[0] || null);
                enqueueSnackbar("Audio Fetched Success", { variant: "success" });
            } catch (err: any) {
                enqueueSnackbar("Audio Fetched Error", { variant: "error" });
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchAudioFiles();
    }, []);

    if (loading) return <p>Loading audio files...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleAudioSpecify = (index: number) => {
        setAudioUrl(audioFiles[index] || null);
        setNextTrack(audioFiles[index + 1] || null);
        setPrevTrack(audioFiles[index - 1] || null);
    }

    return (
        <div className='list'>
            <h1>PlayList</h1>
            <ul>
                {audioFiles && audioFiles.map((fileUrl, index) => (
                    <li key={fileUrl} onClick={() => handleAudioSpecify(index)}>
                        <p>{fileUrl}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}