import React from 'react';
import AwkwardBG from '../assets/mentor.svg';
import BurntBG from '../assets/buddy.svg';

function WhyPeerUp() {
  return (
    <section className="why-peerup">
      <h2>Why PeerUp?</h2>
      <ul>
        <li className="card card-awkward">
          <div className="card-content">
            <h3>No more awkward mentorships</h3>
            <p>Find matches who vibe with your energy, not just your resume.</p>
          </div>
        </li>
        <li className="card card-burnout">
          <div className="card-content">
            <h3>Burnt out? Let’s trauma-bond productively</h3>
            <p>You’re not alone. Find peers who get it and grow with you.</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default WhyPeerUp;
