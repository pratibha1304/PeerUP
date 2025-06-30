import React, { useEffect, useState } from 'react';
import './Matches.css';

function Matches() {
  const [profiles, setProfiles] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchMatches = async () => {
      const res = await fetch(`http://localhost:5000/api/match/${userId}`);
      const data = await res.json();
      setProfiles(data);
    };
    if (userId) fetchMatches();
  }, [userId]);

  const handleSwipe = async (targetId, direction) => {
    try {
      const res = await fetch('http://localhost:5000/api/swipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: userId, to: targetId, direction })
      });

      const data = await res.json();
      console.log(data.message || data.error);

      // Remove the swiped profile from the UI
      setProfiles(prev => prev.filter(p => p.userId !== targetId));
    } catch (err) {
      console.error('Swipe failed:', err);
    }
  };

  return (
    <div className="matches">
      <h2>Potential Matches ✨</h2>
      <div className="profile-grid">
        {profiles.map(p => (
          <div className="profile-card" key={p._id}>
            <h3>{p.name || 'Anonymous'}</h3>
            <p><strong>Role:</strong> {p.role}</p>
            <p><strong>Skills:</strong> {p.skills.map(s => s.name).join(', ')}</p>
            <p><strong>Interests:</strong> {p.interests.join(', ')}</p>
            <p><strong>Match Score:</strong> {p.matchScore}</p>
            <div className="swipe-buttons">
              <button onClick={() => handleSwipe(p.userId, 'left')} className="dislike-btn">💔 Dislike</button>
              <button onClick={() => handleSwipe(p.userId, 'right')} className="like-btn">❤️ Like</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Matches;
