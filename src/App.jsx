import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AudioPlayer from "./components/layout/AudioPlayer";
import Invitation from "./pages/Invitation";

function App() {
  return (
    <div className="min-h-screen bg-sage-50 text-sage-900 font-sans selection:bg-gold-200">
      <Navbar />
      <Invitation />
      <Footer />
      <AudioPlayer />
    </div>
  );
}

export default App;
