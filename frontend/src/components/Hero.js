import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Lost? Confused? Craving some clarity? Same.</h1>
        <p>PeerUp matches you with someone who <em>gets it</em>. A mentor. A buddy. A support system.</p>
        <button onClick={() => navigate('/join')}>
          Find Your Peer Match
        </button>
      </div>
    </section>
  );
}

export default Hero;
