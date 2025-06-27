import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OnboardingForm.css';

const GOALS = {
  mentee: ["Build a project", "Learn a skill", "Resume help", "Explore paths", "Stay accountable"],
  mentor: ["Help others grow", "Share industry insight", "Build leadership experience"],
  buddy: ["Peer projects", "Study accountability", "Explore interests together"]
};

const OnboardingForm = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('');
  const [goal, setGoal] = useState('');
  const [skills, setSkills] = useState([{ name: '', level: 'Beginner' }]);
  const [interests, setInterests] = useState([]);
  const [vibe, setVibe] = useState([]);
  const [availability, setAvailability] = useState('');
  const [interaction, setInteraction] = useState('');

  const VIBE_OPTIONS = ["Chill", "Focused", "Talkative", "Funny", "Anxious but ambitious"];
  const INTEREST_OPTIONS = ["Hackathons", "UX", "Startups", "DevFest", "Product", "AI", "Design"];

  const handleSkillChange = (index, field, value) => {
    const updated = [...skills];
    updated[index][field] = value;
    setSkills(updated);
  };

  const addSkill = () => {
    setSkills([...skills, { name: '', level: 'Beginner' }]);
  };

  const toggleSelection = (setFunc, values, max = null) => (value) => {
    setFunc((prev) => {
      if (prev.includes(value)) return prev.filter((v) => v !== value);
      if (max && prev.length >= max) return prev;
      return [...prev, value];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { role, goal, skills, interests, vibe, availability, interaction };
    console.log("Onboarding data:", data);
    navigate('/dashboard');
  };

  return (
    <section className="onboarding-form">
      <form onSubmit={handleSubmit}>
        <h2>✨ Let’s personalize your PeerUp journey</h2>

        <div className="form-section">
          <label>What role are you here for?</label>
          <div className="radio-group">
            {['mentee', 'mentor', 'buddy'].map(r => (
              <label key={r}>
                <input type="radio" value={r} checked={role === r} onChange={(e) => setRole(e.target.value)} />
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {role && (
          <>
            <div className="form-section">
              <label>Your goal:</label>
              <select value={goal} onChange={(e) => setGoal(e.target.value)} required>
                <option value="">Select goal</option>
                {GOALS[role].map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>

            <div className="form-section">
              <label>Skills:</label>
              {skills.map((skill, index) => (
                <div key={index} className="skill-row">
                  <input
                    type="text"
                    placeholder="Skill name"
                    value={skill.name}
                    onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                  />
                  <select
                    value={skill.level}
                    onChange={(e) => handleSkillChange(index, 'level', e.target.value)}
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Pro</option>
                  </select>
                </div>
              ))}
              <button type="button" onClick={addSkill}>+ Add Skill</button>
            </div>

            <div className="form-section">
              <label>Interests (max 5):</label>
              <div className="chip-group">
                {INTEREST_OPTIONS.map((i) => (
                  <span
                    key={i}
                    className={interests.includes(i) ? 'chip selected' : 'chip'}
                    onClick={() => toggleSelection(setInterests, interests, 5)(i)}
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>

            <div className="form-section">
              <label>Pick 3 vibe tags that describe you:</label>
              <div className="chip-group">
                {VIBE_OPTIONS.map((v) => (
                  <span
                    key={v}
                    className={vibe.includes(v) ? 'chip selected' : 'chip'}
                    onClick={() => toggleSelection(setVibe, vibe, 3)(v)}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>

            <div className="form-section">
              <label>Availability:</label>
              <div className="radio-group">
                {["Daily", "Weekly", "Flexible"].map((a) => (
                  <label key={a}>
                    <input
                      type="radio"
                      name="availability"
                      value={a}
                      checked={availability === a}
                      onChange={(e) => setAvailability(e.target.value)}
                    />
                    {a}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-section">
              <label>Preferred interaction:</label>
              <div className="radio-group">
                {["Call", "Text", "Async"].map((i) => (
                  <label key={i}>
                    <input
                      type="radio"
                      name="interaction"
                      value={i}
                      checked={interaction === i}
                      onChange={(e) => setInteraction(e.target.value)}
                    />
                    {i}
                  </label>
                ))}
              </div>
            </div>

            <button type="submit">🚀 Let’s Go</button>
          </>
        )}
      </form>
    </section>
  );
};

export default OnboardingForm;
