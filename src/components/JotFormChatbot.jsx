// src/components/JotFormChatbot.jsx
import React, { useEffect } from 'react';
import './JotFormChatbot.css'; // Import the updated CSS for responsiveness

const JotFormChatbot = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js';
    script.async = true;
    script.defer = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Initialize the chatbot once the script is loaded
    script.onload = () => {
      window.AgentInitializer.init({
        rootId: "JotformAgent-0194179f63c07ac8a86654ae974634a6870d",
        formID: "0194179f63c07ac8a86654ae974634a6870d",
        queryParams: ["skipWelcome=1", "maximizable=1"],
        domain: "https://www.jotform.com",
        isInitialOpen: false,
        isDraggable: true, // Allow dragging on larger screens
        background: "linear-gradient(180deg, #424757 0%, #424757 100%)",
        buttonBackgroundColor: "#11111B",
        buttonIconColor: "#FFF",
        variant: false,
        customizations: {
          "greeting": "Yes",
          "greetingMessage": "Hi! How can I assist you?",
          "pulse": "Yes",
          "position": "right"
        }
      });
    };

    // Cleanup: Remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="jotform-chatbot-container">
      <div id="JotformAgent-0194179f63c07ac8a86654ae974634a6870d"></div>
    </div>
  );
};

export default JotFormChatbot;