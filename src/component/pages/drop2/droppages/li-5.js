import React from 'react';

function LawnCareTips() {
  const tips = [
    "Mow your lawn regularly to keep it healthy.",
    "Water your lawn early in the morning to prevent disease.",
    "Avoid cutting more than one-third of the grass height at a time.",
    "Keep your mower blades sharp for cleaner cuts.",
    "Use a mulching mower to recycle grass clippings.",
    "Fertilize your lawn in the early spring and late fall.",
    "Aerate your lawn to improve water and nutrient absorption.",
    "Control weeds by using pre-emergent herbicides.",
    "Keep your lawn clear of debris to prevent pests.",
    "Overseed your lawn to improve its density and health."
  ];

  // Define styles as JavaScript objects
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    borderRadius: '8px',
    width: '80%',
    margin: '0 auto',
    boxShadow: '0 4px 8px rgba(174, 11, 11, 0.1)',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#2c6b2f',
    fontSize: '2rem',
    marginBottom: '15px',
  };

  const listStyle = {
    listStyleType: 'decimal',
    paddingLeft: '20px',
    color: '#333',
    fontSize: '1rem',
  };

  const listItemStyle = {
    marginBottom: '10px',
    lineHeight: '1.6',
    backgroundColor: '#ffffff',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  };

  const listItemHoverStyle = {
    backgroundColor: '#c8e6c9',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Grass Cutting and Lawn Care Tips</h1>
      <ul style={listStyle}>
        {tips.map((tip, index) => (
          <li
            key={index}
            style={listItemStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = listItemHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
          >
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LawnCareTips;
