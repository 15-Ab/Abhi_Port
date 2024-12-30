import React from 'react';
import './Chatbot.css'; // Your existing Chatbot styles
import JotFormChatbot from './JotFormChatbot'; // Import the JotForm Chatbot

const Chatbot = () => {
  // Your existing chatbot logic and JSX
  return (
    <div className="chatbot-wrapper">
      <JotFormChatbot />
    </div>
  );
};

export default Chatbot;