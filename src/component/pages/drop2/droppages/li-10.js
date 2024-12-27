import React from 'react';

const Li10 = () => {
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
    ...paragraphStyle,
    backgroundColor: '#e0f7fa',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Computers Years Ago</h1>

      <h2 style={subheadingStyle}>Windows 3.1</h2>
      <p style={paragraphStyle} className="paragraph-hover">
        In about the year 1996, I got my first computer. It had "Windows 3.1" on it. Back then, you had a workspace on it called a "desktop." On the desktop, you could play pre-installed games, or you could insert a CD and have the computer run it. Once the CD ran, you could play whatever was on it.
      </p>
      <p style={paragraphStyle} className="paragraph-hover">
        The pre-installed files were stored in a folder called "Program Files." You could run the CD and install whatever was on it, and your desktop would open up a folder either called "Program Files" or the name of the folder containing your data from the CD.
      </p>

      <h2 style={subheadingStyle}>Windows 95</h2>
      <p style={paragraphStyle} className="paragraph-hover">
        "Windows 95" was the next version of Windows that came to the computer. It started adding a little more color to the desktop and the files and folders. Windows 95 looked much better than Windows 3.1 did. In 1998, Windows 95 became the operating system that most users switched to.
      </p>

      <h2 style={subheadingStyle}>Windows 98</h2>
      <p style={paragraphStyle} className="paragraph-hover">
        Windows 98 came next. It introduced the "Start Menu," which contained a help file with frequently asked questions and answers to help users navigate and use Windows more efficiently. The menu also had a sub-menu listing pre-installed games and programs that users could easily access and use.
      </p>
    </div>
  );
};

export default Li10;
