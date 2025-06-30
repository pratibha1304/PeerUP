import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './DashboardLayout.css';

function DashboardLayout() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">PeerUp 🚀</div>
        <nav className="sidebar-nav">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>🏠 Dashboard</NavLink>
          <NavLink to="/matches" className={({ isActive }) => isActive ? 'active' : ''}>🔍 Find Matches</NavLink>
          <NavLink to="/matched" className={({ isActive }) => isActive ? 'active' : ''}>👥 Matched Profiles</NavLink>
          <NavLink to="/chat" className={({ isActive }) => isActive ? 'active' : ''}>💬 Chat & Schedule</NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>👤 My Profile</NavLink>
          <NavLink to="/logout" className={({ isActive }) => isActive ? 'active' : ''}>🚪 Logout</NavLink>
        </nav>
      </aside>
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;