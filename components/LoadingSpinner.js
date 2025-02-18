// components/LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    );
};

export default LoadingSpinner;
