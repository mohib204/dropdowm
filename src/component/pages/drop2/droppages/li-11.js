import React from 'react';

const Li11 = () => {
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

  const linkStyle = {
    color: '#1a73e8',
    textDecoration: 'none',
  };

  const hoverLinkStyle = {
    textDecoration: 'underline',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>My Favorite Links</h1>

      <h2 style={subheadingStyle}>Yahoo</h2>
      <p
        style={paragraphStyle}
        className="paragraph-hover"
      >
        I ask questions on the Answers page on Yahoo. It's a great place to get responses from a community.
      </p>

      <h2 style={subheadingStyle}>AOL</h2>
      <p
        style={paragraphStyle}
        className="paragraph-hover"
      >
        AOL was one of the early internet services that I enjoyed using for browsing and chatting online.
      </p>

      <h2 style={subheadingStyle}>Where I Tweet</h2>
      <p
        style={paragraphStyle}
        className="paragraph-hover"
      >
        I'm active on Twitter as{' '}
        <a
          href="https://twitter.com/N_712t0"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
          onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
        >
          @N_712t0
        </a>. Feel free to connect with me!
      </p>

      <h2 style={subheadingStyle}>Facebook</h2>
      <p
        style={paragraphStyle}
        className="paragraph-hover"
      >
        Facebook has been a long-time favorite for connecting with friends, family, and groups.
      </p>

      <h2 style={subheadingStyle}>Memorable Entertainment TV</h2>
      <p
        style={paragraphStyle}
        className="paragraph-hover"
      >
        I enjoy watching memorable TV shows and entertainment, which brings back great memories.
      </p>

      <h2 style={subheadingStyle}>MSN</h2>
      <p
        style={paragraphStyle}
        className="paragraph-hover"
      >
        MSN has been a good source for getting the latest news and updates.
      </p>

      <h2 style={subheadingStyle}>The Weather</h2>
      <p
        style={paragraphStyle}
        className="paragraph-hover"
      >
        I check the weather regularly to plan my day and stay prepared for any changes.
      </p>

      <h2 style={subheadingStyle}>Google</h2>
      <p
        style={paragraphStyle}
        className="paragraph-hover"
      >
        Google is my go-to search engine for finding information across the web.
      </p>

      <h2 style={subheadingStyle}>Ask</h2>
      <p
        style={paragraphStyle}
        className="paragraph-hover"
      >
        I use Ask to search the web when I need quick answers to my questions.
      </p>
    </div>
  );
};

export default Li11;
