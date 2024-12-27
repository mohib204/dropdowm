import React from 'react';

const Li22 = () => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#333',
  };

  const paragraphStyle = {
    marginBottom: '15px',
    lineHeight: '1.6',
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About My TV and the TVs of Today</h1>

      <p style={paragraphStyle}>
        The TV I grew up with had just a coaxial connection and an RCA input. The plug was built-in.
      </p>
      <p style={paragraphStyle}>
        Now they are liquid crystal displays (LCDs) with HDMI connections. And they have:
        <ul>
          <li>USB</li>
          <li>More RCA inputs</li>
        </ul>
      </p>
      <p style={paragraphStyle}>
        The TV channels were in standard definition with these new LCD TVs. Then they went to high definition for the TV channels. Then the TV itself went to 1080p definition. Afterward, they upgraded it to a way to see the picture clearer. Suppose you want to see a flower on TV just as you've seen it outside. They did it like this so far:
        <ul>
          <li>720p</li>
          <li>1080p</li>
          <li>2k</li>
          <li>4k</li>
          <li>8k</li>
        </ul>
        Now, we're at 8k.
      </p>
      <p style={paragraphStyle}>
        There was an idea that you can cut the cable cord for the TV and switch to the ability to access free TV shows and movies. They sell a Fire TV Stick that attaches to your TV through its HDMI port. You watch things in the stick called "apps." The Fire TV Stick has tons to look up and is available through it and over the wireless internet.
      </p>
      <p style={paragraphStyle}>
        Nowadays (year 2022), the apps are built into the new TVs. And on the subject of these new TVs, I'll stop here.
      </p>
    </div>
  );
};

export default Li22;
