import React from 'react';

function Li7() {
  const games = [
    "Sim City for the SNES console",
    "PGA Tour Golf for the SNES console",
    "Wii Sports Golf for the Wii console",
    "Super Mario Brothers 1 and 3 for the NES console",
    "Double Dragon 2 for the NES console",
    "Contra and Super Contra for the NES console",
    "Donkey Kong Country 1, 2, and 3 for the SNES console",
    ".... and that's it!!!"
  ];

  // Inline CSS Styles
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#e1f5fe',
    padding: '20px',
    borderRadius: '8px',
    width: '80%',
    margin: '0 auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const headingStyle = {
    color: '#01579b',
    fontSize: '2rem',
    marginBottom: '15px',
  };

  const listStyle = {
    listStyleType: 'decimal',
    paddingLeft: '20px',
    fontSize: '1.2rem',
    color: '#0277bd',
    lineHeight: '1.8',
  };

  const listItemStyle = {
    marginBottom: '10px',
    backgroundColor: '#ffffff',
    padding: '12px',
    borderRadius: '5px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  };

  const listItemHoverStyle = {
    backgroundColor: '#81d4fa',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>My Favorite Games of All Time</h1>
      <ol style={listStyle}>
        {games.map((game, index) => (
          <li
            key={index}
            style={listItemStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#81d4fa')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#ffffff')}
          >
            {game}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Li7;
