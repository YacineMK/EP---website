import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any action with the submitted message
    console.log('Submitted message:', message);
    setMessage('');
  };

  return (
    <footer
      style={{
        backgroundColor: '#f7f7f7fc',
        color: '#252525',
        padding: '20px',
        textAlign: 'center',
        height: '100px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '300px',
          margin: '0 auto',
        }}
      >
        <input
          type="text"
          placeholder="Send a message"
          value={message}
          onChange={handleMessageChange}
          style={{
            backgroundColor: '#f7f7f7fc',
            color: '#23a0de',
            padding: '10px',
            borderRadius: '30px',
            border: 'none',
            width: '100%',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#f7f7f7fc',
            color: '#23a0de',
            padding: '10px 20px',
            borderRadius: '30px',
            border: 'none',
            marginLeft: '10px',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} style={{ marginRight: '10px', color: '#23a0de' }} />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} style={{ marginRight: '10px', color: '#23a0de' }} />
        </a>
        <a
          href="https://discord.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord size={30} style={{ color: '#23a0de' }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
