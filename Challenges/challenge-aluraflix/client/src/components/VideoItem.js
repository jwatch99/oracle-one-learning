import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onDelete }) => {
  return (
    <div className="video-item">
      <h3>{video.title}</h3>
      <p>{video.url}</p>
      <button onClick={() => onDelete(video.id)}>Delete</button>
    </div>
  );
};

export default VideoItem;
