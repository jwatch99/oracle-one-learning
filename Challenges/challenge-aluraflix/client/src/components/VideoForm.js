import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const VideoForm = ({ onAddVideo }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVideo = { id: uuidv4(), title, url };

    axios.post('http://localhost:5000/api/videos', newVideo) 
      .then(response => {
        onAddVideo(response.data);
        setTitle('');
        setUrl('');
      })
      .catch(error => {
        console.error("There was an error adding the video!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>URL</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Video</button>
    </form>
  );
};

export default VideoForm;
