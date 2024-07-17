const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const DATA_FILE = './videos.json';

const readData = () => {
  if (fs.existsSync(DATA_FILE)) {
    const rawData = fs.readFileSync(DATA_FILE);
    return JSON.parse(rawData);
  }
  return [];
};

const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

app.get('/api/videos', (req, res) => {
  const videos = readData();
  res.json(videos);
});

app.post('/api/videos', (req, res) => {
  const videos = readData();
  const newVideo = req.body;
  videos.push(newVideo);
  writeData(videos);
  res.status(201).json(newVideo);
});

app.delete('/api/videos/:id', (req, res) => {
  const videos = readData();
  const videoId = req.params.id;
  const updatedVideos = videos.filter(video => video.id !== videoId);
  writeData(updatedVideos);
  res.status(204).end();
});

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Manejar todas las demás rutas y redirigir a index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
