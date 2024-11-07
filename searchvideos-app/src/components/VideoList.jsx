import React from "react";
import VideoItem from "../components/VideoItem";
import "../Video.css";

const VideoList = ({ videos = [] }) => {
  console.log("VideoList videos:", videos); // Prop'ları kontrol et
  return (
    <div className="videoList">
      {videos.length > 0 ? (
        videos.map((video, index) => <VideoItem key={index} video={video} />)
      ) : (
        <p>No videos found</p> // No videos found mesajı
      )}
    </div>
  );
};

export default VideoList;
