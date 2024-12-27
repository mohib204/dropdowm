import React from 'react';

function Li6() {
  const info = [
    "Stuff on the old show called 'The Honeymooners':",
    "The show aired from 1955 to 1956, and is a sitcom featuring Ralph Kramden and his wife Alice, along with their neighbor Norton and his wife Trixie.",
    "The show was known for its comedic antics, with Ralph often getting into trouble due to his overconfidence and schemes.",
    "Ralph's famous line was 'Honeymooners, you're gonna go to the moon!' which became iconic in TV history.",
    "The show also explored themes of marital relationships, friendship, and domestic life during the 1950s."
  ];

  const episodeInfo = [
    "In one episode of 'The Honeymooners', Ralph doesn’t want a TV set, but Alice does.",
    "After some time goes by in the show, Ralph eventually buys a TV.",
    "At the end of the show, Ralph and Norton are sleeping in the kitchen in front of the TV set.",
    "Alice comes out and says, 'For once, you’re right Ralph. We didn’t need a TV set.'"
  ];

  // Inline CSS Styles
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    width: '80%',
    margin: '0 auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#2c6b2f',
    fontSize: '2rem',
    marginBottom: '15px',
  };

  const paragraphStyle = {
    color: '#333',
    fontSize: '1rem',
    marginBottom: '10px',
    lineHeight: '1.6',
  };

  const listStyle = {
    listStyleType: 'decimal',
    paddingLeft: '20px',
    color: '#333',
    fontSize: '1rem',
    marginBottom: '20px',
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
      <h1 style={headingStyle}>Stuff on "The Honeymooners"</h1>
      
      <div>
        <h2 style={headingStyle}>About the Show:</h2>
        <ul style={listStyle}>
          {info.map((item, index) => (
            <li key={index} style={listItemStyle}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 style={headingStyle}>Episode Summary:</h2>
        <ul style={listStyle}>
          {episodeInfo.map((item, index) => (
            <li key={index} style={listItemStyle}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Li6;
