import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoItem from './VideoItem';
import './VideoList.css';

const VideoList = () => {
  const [videos, setVideos] = useState({
    backend: [],
    frontend: [],
    innovacionYGestion: []
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/videos')  
      .then(response => {
        const backendVideos = response.data.filter(video => video.section === 'backend');
        const frontendVideos = response.data.filter(video => video.section === 'frontend');
        const innovacionYGestionVideos = response.data.filter(video => video.section === 'innovacion-y-gestion');

        setVideos({
          backend: backendVideos,
          frontend: frontendVideos,
          innovacionYGestion: innovacionYGestionVideos
        });
      })
      .catch(error => {
        console.error("There was an error fetching the videos!", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/videos/${id}`)
      .then(() => {
        setVideos(prevVideos => ({
          backend: prevVideos.backend.filter(video => video.id !== id),
          frontend: prevVideos.frontend.filter(video => video.id !== id),
          innovacionYGestion: prevVideos.innovacionYGestion.filter(video => video.id !== id)
        }));
      })
      .catch(error => {
        console.error("There was an error deleting the video!", error);
      });
  };

  return (
    <div className="video-list">
      <h2>Video List</h2>
      
      <div className="section">
        <h3>Backend</h3>
        {videos.backend.map(video => (
          <VideoItem key={video.id} video={video} onDelete={handleDelete} />
        ))}
      </div>

      <div className="section">
        <h3>Frontend</h3>
        {videos.frontend.map(video => (
          <VideoItem key={video.id} video={video} onDelete={handleDelete} />
        ))}
      </div>

      <div className="section">
        <h3>Innovación y Gestión</h3>
        {videos.innovacionYGestion.map(video => (
          <VideoItem key={video.id} video={video} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
