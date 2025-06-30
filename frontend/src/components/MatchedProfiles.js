// === src/components/MatchedProfiles.js ===

import React, { useEffect, useState } from 'react';
import './MatchedProfiles.css';

function MatchedProfiles() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    const fetchMatches = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/match/${userId}`);
        const data = await res.json();
        setMatches(data);
      } catch (err) {
        console.error('Error fetching matches:', err);
      }
    };

    if (userId) {
      fetchMatches();
    }
  }, []);

  return (
    <div className="matched-profiles">
      <h2>Your Matches 🤝</h2>
      <p>These folks vibe with your goals, skills, and existential journey ✨</p>

      {matches.length === 0 ? (
        <p>No matches found. Try updating your profile.</p>
      ) : (
        <div className="profile-grid">
          {matches.map(profile => (
            <div key={profile._id} className="profile-card">
              <img src={profile.avatar || 'https://i.pravatar.cc/150'} alt={profile.name} className="avatar" />
              <h3>{profile.name || 'PeerUp User'}</h3>
              <p><strong>Role:</strong> {profile.role}</p>
              <p><strong>Goal:</strong> {profile.goal}</p>
              <p><strong>Skills:</strong> {profile.skills?.map(s => s.name).join(', ')}</p>
              <p><strong>Vibe:</strong> {profile.vibe?.join(', ')}</p>
              <p><strong>Match Score:</strong> {profile.matchScore}</p>
              <button className="chat-btn">💬 Start Chat & Schedule</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MatchedProfiles;
