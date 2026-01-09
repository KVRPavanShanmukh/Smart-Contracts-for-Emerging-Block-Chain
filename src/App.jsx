import { useRef, useEffect } from 'react';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import bgVideo from "./assets/videos/bg.mp4";
import "./styles/App.css";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(err => console.log('Autoplay prevented:', err));
    }
  }, []);

  return (
    <div className="app">
      <video
        ref={videoRef}
        className="bg-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={bgVideo} type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
