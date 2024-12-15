import React, { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import CaptionInput from "./components/CaptionInput";
import "./App.css";

function App() {
  const [videoURL, setVideoURL] = useState("");
  const [captions, setCaptions] = useState([]);

  const handleAddCaption = (text, start, end) => {
    setCaptions([...captions, { text, start, end }]);
  };

  return (
    <div className="App">
      <h1>Video Captioning Tool</h1>
      <div>
        <label htmlFor="videoURL">Video URL:</label>
        <input
          type="text"
          id="videoURL"
          placeholder="Enter video URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <br></br>
        <small>eg: https://www.w3schools.com/html/mov_bbb.mp4</small>
      </div>

      {videoURL && (
        <>
          <VideoPlayer videoURL={videoURL} captions={captions} />
          <CaptionInput onAddCaption={handleAddCaption} />
        </>
      )}
    </div>
  );
}

export default App;
