import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ApplyModal from './components/ApplyModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar onApplyClick={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        <LandingPage onApplyClick={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <ApplyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
