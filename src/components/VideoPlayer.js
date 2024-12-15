import React, { useState, useEffect } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ videoURL, captions }) => {
  const [currentCaption, setCurrentCaption] = useState("");

  const handleTimeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    const activeCaption = captions.find(
      (caption) => currentTime >= caption.start && currentTime <= caption.end
    );
    setCurrentCaption(activeCaption ? activeCaption.text : "");
  };

  return (
    <div className="video-container">
      <video
        id="video-player"
        controls
        onTimeUpdate={handleTimeUpdate}
      >
        {/* Fallback for multiple formats */}
        <source src={videoURL} type="video/mp4" />
        <source src={videoURL} type="video/webm" />
        <source src={videoURL} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <div className="caption-overlay">{currentCaption}</div>
    </div>
  );
};

export default VideoPlayer;
