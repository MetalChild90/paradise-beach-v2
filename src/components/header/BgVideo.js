import React, { useRef } from "react";
import video from "../../assets/video.mp4";
import islandImage from "../../assets/kliffs.png";
// Video by Mikhail Nilov: https://www.pexels.com/video/drone-footage-of-rock-formations-in-the-shore-8357346/
import Loader from "../Loader";
import useToggle from "../../hooks/useToggle";

const BgVideo = () => {
  const [videoLoaded, setVideoLoaded] = useToggle(false);
  const [activePlay, toggleActivePlay] = useToggle(true);

  const vidRef = useRef(null);

  function playVideo() {
    vidRef.current.play();
  }

  function pauseVideo() {
    vidRef.current.pause();
  }

  function handlePlayButton() {
    if (activePlay) {
      pauseVideo();
    } else {
      playVideo();
    }
    toggleActivePlay();
  }

  return (
    <>
      <div className="BgVideo">
        <video
          className="video"
          autoPlay
          loop
          playsInline
          muted
          ref={vidRef}
          onLoadedData={() => {
            setVideoLoaded(true);
          }}
        >
          <source id="video" src={video} type="video/ogg" />
        </video>
        <div onClick={handlePlayButton} className="videoOverlay">
          <button className={`video-button ${!activePlay && "active"}`}>
            <i className="fa-solid fa-play"></i>
          </button>
        </div>
        <div>
          <img
            className="video-replacement"
            src={islandImage}
            alt="island's kliffs view"
          />
        </div>
      </div>
      {!videoLoaded && <Loader />}
    </>
  );
};

export default BgVideo;
