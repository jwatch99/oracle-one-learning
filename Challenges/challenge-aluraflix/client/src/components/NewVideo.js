import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate as  useHistory } from 'react-router-dom';
import './NewVideo.css';
import { v4 as uuidv4 } from 'uuid';

const NewVideo = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [section, setSection] = useState('backend');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newVideo = { id: uuidv4(), title, url, section };

    axios.post('http://localhost:5000/api/videos', newVideo)
      .then(response => {
        history('/');
      })
      .catch(error => {
        console.error("There was an error adding the video!", error);
      });
  };

  return (
    <div className="new-video">
      <h2>Add New Video</h2>
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
        <div>
          <label>Section</label>
          <select value={section} onChange={(e) => setSection(e.target.value)}>
            <option value="backend">Backend</option>
            <option value="frontend">Frontend</option>
            <option value="innovacion-y-gestion">Innovación y Gestión</option>
          </select>
        </div>
        <button type="submit">Add Video</button>
      </form>
    </div>
  );
};

export default NewVideo;
