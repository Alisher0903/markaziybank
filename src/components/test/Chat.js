import React, { useState, useEffect } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Yangi xabarlarni chatga qo'shish va reply xabarlarini qo'shish uchun timeout ishlatamiz.
    const addMessage = (sender, message) => {
      setMessages(prevMessages => [
        ...prevMessages,
        { sender, message },
      ]);

      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { sender: 'Bot', message: `Men sizga javob beraman: ${message}` },
        ]);
      }, 1000);
    };

    // Ovoz ochish funksiyasi
    const startChat = () => {
      addMessage('Bot', 'Salom! Chatni boshlaymiz.');
    };

    // Chatni boshlash
    startChat();
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.sender}:</strong> {message.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
