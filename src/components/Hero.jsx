import "../styles/App.css";

function App() {
  return (
    <>
      {/* Background Video */}
      <video
        className="bg-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="video-overlay"></div>

      {/* App Content */}
      <div className="app">
        <NavBar />
        <Hero />
      </div>
    </>
  );
}

export default App;
