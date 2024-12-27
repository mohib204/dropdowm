import React from 'react';

const L12 = () => {
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

  const hoverStyle = {
    backgroundColor: '#e0f7fa',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Food</h1>

      <h2 style={subheadingStyle}>Steak</h2>
      <p style={paragraphStyle}>A delicious, hearty meal often served with potatoes or vegetables.</p>

      <h2 style={subheadingStyle}>Turkey</h2>
      <p style={paragraphStyle}>A flavorful poultry, often served during holidays like Thanksgiving.</p>

      <h2 style={subheadingStyle}>Chicken</h2>
      <p style={paragraphStyle}>A versatile meat, commonly roasted, grilled, or fried.</p>

      <h2 style={subheadingStyle}>Corn</h2>
      <p style={paragraphStyle}>A sweet and crunchy vegetable, often enjoyed on the cob or in dishes like corn on the cob or corn pudding.</p>

      <h2 style={subheadingStyle}>Soup</h2>
      <p style={paragraphStyle}>A warm, comforting meal, ranging from light broths to hearty stews.</p>

      <h2 style={subheadingStyle}>Rice</h2>
      <p style={paragraphStyle}>A staple food that pairs well with many dishes, such as curries or stir-fries.</p>

      <h2 style={subheadingStyle}>Cereal</h2>
      <p style={paragraphStyle}>A breakfast food often enjoyed with milk or yogurt, and can be sweet or savory.</p>

      <h2 style={subheadingStyle}>Chex Party Mix</h2>
      <p style={paragraphStyle}>A popular snack mix that combines Chex cereal, nuts, pretzels, and seasonings.</p>

      <h2 style={subheadingStyle}>Cheez-Its</h2>
      <p style={paragraphStyle}>A cheesy, crunchy snack enjoyed by many as a quick treat.</p>

      <h2 style={subheadingStyle}>Sweets</h2>
      <p style={paragraphStyle}>Desserts and sugary treats like cakes, cookies, and candies.</p>

      <h2 style={subheadingStyle}>Pops</h2>
      <p style={paragraphStyle}>Refreshing, often sugary snacks or drinks, like soda or popsicles.</p>

      <h2 style={subheadingStyle}>Junk Foods</h2>
      <p style={paragraphStyle}>Snacks like chips, candy, and fast food, often high in calories and low in nutritional value.</p>
    </div>
  );
};

export default L12;
