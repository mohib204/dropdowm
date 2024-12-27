import React from 'react';

function Li4() {
  const tips = [
    "Use the ShamWow towel.",
    "Use the Swiffer WetJet.",
    "Use the Spin Mop.",
    "Use a strong-sucking sweeper.",
    "Use a broom and dustpan."
  ];
  
  
  return (
    <div className="cleaning-tips-container">
      <h1>Good House-Cleaning Tips</h1>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default Li4;
