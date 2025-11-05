import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();
  
  return (
    <div className="Home">
      <h1>Explore the World with TravelVihag 🌎</h1>
      <p>Your next adventure begins here! Discover amazing destinations.</p>
      <button onClick={() => navigate('/services')}>
        Start Exploring
      </button>
    </div>
  );
}

export default Home;