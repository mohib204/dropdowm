import React from 'react';

const Li17 = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#f9f9f9',
  };

  const subheadingStyle = {
    color: '#666',
    backgroundColor: '#f9f9f9',
  };

  const paragraphStyle = {
    marginBottom: '15px',
    lineHeight: '1.6',
    backgroundColor: '#f9f9f9',
    
  };

  const quoteStyle = {
    fontStyle: 'italic',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>My Favorite Quotes</h1>

      <h2 style={subheadingStyle}>Barney Fife on The Andy Griffith Show:</h2>
      <p style={paragraphStyle}>
        <span style={quoteStyle}>
          "I'm not very hungry, I'll have coffee, orange juice, wheat, hash browns, and a bowl of cereal."
        </span>
      </p>

      <h2 style={subheadingStyle}>Andy Comments About Barney:</h2>
      <p style={paragraphStyle}>
        <span style={quoteStyle}>
          "I have a good mind to take away the motorcycle, keep the sidecar, fill it up with sand, give him a bucket and shovel and let him play in it on weekends."
        </span>
      </p>

      <h2 style={subheadingStyle}>On an Episode of The Andy Griffith Show:</h2>
      <p style={paragraphStyle}>
        A man is evicted from his home, and he has a savings bond issued by Mayberry that's 100 years old.
      </p>

      <h2 style={subheadingStyle}>The Banker Says:</h2>
      <p style={paragraphStyle}>
        <span style={quoteStyle}>
          "We owe Frank $__________."
        </span>
      </p>

      <h2 style={subheadingStyle}>The Mayor Says:</h2>
      <p style={paragraphStyle}>
        <span style={quoteStyle}>
          "Over a quarter of a million dollars!!!"
        </span>
      </p>

      <h2 style={subheadingStyle}>Frank Says:</h2>
      <p style={paragraphStyle}>
        <span style={quoteStyle}>
          "I'll take it in cash."
        </span>
      </p>
    </div>
  );
};

export default Li17;
