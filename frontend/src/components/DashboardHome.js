import React from 'react';
import './DashboardHome.css';
import { useNavigate } from 'react-router-dom';

function DashboardHome() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-home">
      <h1>Hey, Rockstar 🚀</h1>
      <p>Your growth era starts now. Here's your command center 👇</p>

      <div className="quick-actions">
        <div className="action-card" onClick={() => navigate('/dashboard/profile')}>
          <h3>🎯 Update Goal</h3>
          <p>Refocus your mission. New week, new you.</p>
        </div>

        <div className="action-card" onClick={() => navigate('/dashboard/matches')}>
          <h3>🔍 Find Matches</h3>
          <p>Let’s pair you with someone who gets it.</p>
        </div>

        <div className="action-card" onClick={() => navigate('/dashboard/matched')}>
          <h3>👥 View Matches</h3>
          <p>Your brainy buddy crew is waiting.</p>
        </div>

        <div className="action-card" onClick={() => navigate('/dashboard/chat')}>
          <h3>💬 Chat & Schedule</h3>
          <p>Start vibing. Plan those check-ins.</p>
        </div>
      </div>

      <div className="dashboard-quote">
        <em>"Not everything needs to be figured out today... but let’s take one step 👣"</em>
      </div>
    </div>
  );
}

export default DashboardHome;