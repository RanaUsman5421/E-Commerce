import React, { useState, useEffect } from 'react';

const FlashSaleTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

    useEffect(() => {
        const timer = setInterval(() => {
            const distance = targetDate - Date.now();
            setTimeLeft(distance);
            if (distance < 0) clearInterval(timer);
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return (
        <div className='flex gap-3'>
            <div>
                <p className='text-md'>Days</p>
                <p className='text-2xl font-bold text-center'>{days}</p>
            </div>
            <div>
                <p className='text-md'>Hours</p>
                <p className='text-2xl font-bold text-center'>{hours}</p>
            </div>
            <div>
                <p className='text-md'>Minutes</p>
                <p className='text-2xl font-bold text-center'>{minutes}</p>
            </div>
            <div>
                <p className='text-md'>Seconds</p>
                <p className='text-2xl font-bold text-center'>{seconds}</p>
            </div>
        </div>
    );
};

export default FlashSaleTimer;