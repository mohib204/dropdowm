import React from 'react';

const Li18 = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
  };

  const subheadingStyle = {
    color: '#666',
  };

  const paragraphStyle = {
    marginBottom: '15px',
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>What Interests Me</h1>

      <h2 style={subheadingStyle}>Playing Pool</h2>
      <p style={paragraphStyle}>I enjoy a good game of pool in my free time.</p>

      <h2 style={subheadingStyle}>My Video Games</h2>
      <p style={paragraphStyle}>Video games are one of my favorite pastimes for relaxation and entertainment.</p>

      <h2 style={subheadingStyle}>Surf the Web</h2>
      <p style={paragraphStyle}>I like to browse the internet, discovering new things and keeping up with current trends.</p>

      <h2 style={subheadingStyle}>Basketball</h2>
      <p style={paragraphStyle}>Basketball is one of my favorite sports to watch and play.</p>

      <h2 style={subheadingStyle}>Fire TV Stick</h2>
      <p style={paragraphStyle}>I enjoy using my Fire TV Stick for streaming my favorite shows and movies.</p>

      <h2 style={subheadingStyle}>Roku</h2>
      <p style={paragraphStyle}>Roku is another streaming device I use to watch a wide variety of content.</p>

      <h2 style={subheadingStyle}>Pluto TV App</h2>
      <p style={paragraphStyle}>Pluto TV offers a great selection of free TV channels, and I enjoy exploring it often.</p>
    </div>
  );
};

export default Li18;


