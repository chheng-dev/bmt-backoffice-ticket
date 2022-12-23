import React, { useState } from "react";
import Lottie from "react-lottie";
import loading from "../../../assets/Loading.json"

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loading,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className="w-full max-h-full">
            <div className="flex items-center">
                <Lottie  options={defaultOptions} height={150}
                width={150} />
            </div>
        </div>
    )
}


export default Loading