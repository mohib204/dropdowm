import React from 'react';

const Li16 = () => {
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
      <h1 style={headingStyle}>Drinks I Don't Like</h1>
      <p style={paragraphStyle}>I can't think of anything yet.</p>
    </div>
  );
};

export default Li16;
