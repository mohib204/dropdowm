import React from 'react';

const Li19 = () => {
  const containerStyle = {
    padding: '20px',
    textAlign: 'center', /* Ensures all child elements are centered */
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%', /* Ensures the container takes up full width */
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center', /* Ensures the title is centered */
  };

  const textStyle = {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
    textAlign: 'center', /* Ensures the paragraphs are centered */
    width: '100%', /* Ensure the paragraph spans the full width */
    margin: '0 auto', /* Centers the paragraph within the container */
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>The Evolution of Phones</h2>
      <p style={textStyle}>
        The telephone in the 1930s was just a straight cord that went into some sort of a hole in the wall. 
        To make a call, you needed to pick up the receiver and wait for the switchboard operator to answer, 
        as they had to connect you to the person or area you needed to reach.
      </p>
      <p style={textStyle}>
        Fast forward to 2020, and we now have smartphones. They allow for web surfing, video calls, gaming, and 
        can be taken anywhere in the world and used as long as there’s internet access.
      </p>
    </div>
  );
};

export default Li19;
