'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import './slider.css'

const SliderComp = () => {
    const [imgIndex, setImgIndex] = useState(1);
    const totalSlides = 4;

    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex((prev) => (prev === totalSlides ? 1 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleImgIndex = (index: number) => {
        setImgIndex(index);
    };

    return (
        <div className="slider-container">
            <Image src={`/slider-resource/slider${imgIndex}.jpg`} width={1920} height={504} alt={`Slider ${imgIndex}`} />
            <div className="click-section">
                {[1, 2, 3, 4].map((num) => (
                    <Image src={imgIndex === num ? '/slider-resource/active-icon.png' : '/slider-resource/inactive-icon.png'} width={15} height={15} alt={`Slider ${imgIndex}`} key={num} onClick={() => handleImgIndex(num)} />
                ))}
            </div>
        </div>
    );
};

export default SliderComp;