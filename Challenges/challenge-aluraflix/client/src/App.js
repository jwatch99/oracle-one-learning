import React from 'react';
import { BrowserRouter as  Routes, Route } from 'react-router-dom';
import VideoList from './components/VideoList';
import NewVideo from './components/NewVideo';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {

  return (
    <div className="app">
    <Header />
    <Routes>
      <Route path="/" exact element={<VideoList/>} />
      <Route path="/new-video" element={<NewVideo/>} />
    </Routes>
    <Footer />
  </div>
  );
};

export default App;
