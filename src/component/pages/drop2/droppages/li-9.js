import React from 'react';

const Li9 = () => {
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

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const listItemStyle = {
    backgroundColor: '#f1f1f1',
    margin: '5px 0',
    padding: '8px',
    borderRadius: '5px',
  };

  const oddItemStyle = {
    backgroundColor: '#e6e6e6',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Me</h1>
      
      <h2 style={subheadingStyle}>TV Shows I Like:</h2>
      <ul style={listStyle}>
        {['All in the Family', 'Sanford and Son', 'Good Times', 'F Troop', 'I Dream of Jeannie', 'Bewitched', 'Get Smart', 'Gilligan\'s Island', 'Taxi', 'Donna Reed', 'The Adventures of Ozzie and Harriet', 'The Andy Griffith Show', 'My Little Margie', 'Father Knows Best', 'Adventures of Superman', 'Patty Duke', 'Dobie Gillis', 'Jag', 'Law and Order', 'Twilight Zone', 'CSI', 'Gomer Pyle USMC', 'Happy Days', 'Laverne and Shirley', 'Saved by the Bell', 'Leave it to Beaver', 'I Love Lucy', 'The Lucy Show', 'Here\'s Lucy', 'Lucy-Desi Comedy Hour', 'Walker, Texas Ranger', 'The Waltons', 'M*A*S*H', 'Beverly Hillbillies', 'Mork and Mindy', 'Joanie Loves Chachi', 'Three\'s Company', 'Mystery Diners', 'Restaurant: Impossible', 'Impossible Engineering', 'The Jeffersons', 'What\'s Happening', 'The Brady Bunch', 'The Partridge Family', 'The White Shadow', 'Welcome Back, Kotter', 'Full House', 'Family Matters', 'Who\'s the Boss?', 'My Father\'s Second Hundred Years', 'Lost in Space', 'ALF', 'Knight Rider', 'MacGyver (with Richard Anderson)', 'Dragnet', 'Different Strokes', 'The Dick Van Dyke Show', 'Maude', 'Golden Girls', 'Gilmore Girls', 'Mary Tyler Moore', 'Phyllis', 'Rhoda', 'Archie Bunker\'s Place', 'Adam 12', 'Mannix', 'Everybody Loves Raymond', 'Two and a Half Men', 'The King of Queens', 'The Facts of Life', 'Rockford Files', 'Airwolf'].map((show, index) => (
          <li key={index} style={{...listItemStyle, ...(index % 2 !== 0 ? oddItemStyle : {})}}>{show}</li>
        ))}
      </ul>

      <h2 style={subheadingStyle}>TV Shows I Don\'t Like:</h2>
      <ul style={listStyle}>
        {['Conan O\'Brien', 'Whose Line Is It Anyway?', 'That \'70s Show', 'The Late Late Show', 'Jimmy Fallon'].map((show, index) => (
          <li key={index} style={{...listItemStyle, ...(index % 2 !== 0 ? oddItemStyle : {})}}>{show}</li>
        ))}
      </ul>
    </div>
  );
};

export default Li9;
