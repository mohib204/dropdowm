import React from 'react';

const Li14 = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
  };

  const subheadingStyle = {
    color: '#555',
    fontSize: '1.4em',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    marginBottom: '20px',
    lineHeight: '1.8',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Candy I Don't Like</h1>

      <h2 style={subheadingStyle}>Nothing Listed So Far</h2>
      <p style={paragraphStyle}></p>
    </div>
  );
};

export default Li14;
