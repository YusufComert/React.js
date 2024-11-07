import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="videoItem">
      <video controls>
        <source src={video.videos.medium.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoItem;
