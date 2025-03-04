import React, { useState } from 'react';
import { FaClock } from 'react-icons/fa';

const LastUpdated = () => {
    const [isVisible, setIsVisible] = useState(false);

    const formatDate = (date) => {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
        };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

    return (
        <div className="last-updated-container">
            <div className={`last-updated-content ${isVisible ? 'show-update' : ''}`}>
                <FaClock 
                    className="clock-icon cursor-pointer" 
                    onClick={() => setIsVisible(!isVisible)}
                />
                <span className="update-text font-montserrat">
                    <span className="font-medium">Last Updated</span>
                    <span className="text-cyan-400 ml-1">—</span>
                    <span className="ml-1 text-gray-300">{formatDate(new Date())}</span>
                </span>
            </div>
        </div>
    );
};

export default LastUpdated;