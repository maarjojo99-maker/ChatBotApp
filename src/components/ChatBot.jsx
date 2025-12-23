import { useState, useEffect, useRef } from "react";
import styles from "./ChatBot.module.css";
import loginIcon from "../assets/login-icon.png";    

const ChatBot = ({ activeChat, setActiveChat, chatStarted, setChatStarted }) => {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    if (!chatStarted) setChatStarted(true); // hide welcome message on first send

    const newMessage = { text: input, sender: "user" };
    const botResponse = { text: `You said: ${input}`, sender: "bot" };

    const updatedChat = [...activeChat, newMessage, botResponse];
    setActiveChat(updatedChat);
    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat]);

  return (
    <div className={styles.chatContainer}>
      {/* Login/profile icon */}
      {!chatStarted && (
        <img
          src={loginIcon}
          alt="Login"
          className={styles.loginIcon}
        />
      )}

      {/* Welcome message */}
      {!chatStarted ? (
        <div className={styles.welcome}>Hello, Hira!</div>
      ) : (
        <div className={styles.messages}>
          {activeChat.map((msg, idx) => (
            <div
              key={idx}
              className={`${styles.message} ${
                msg.sender === "user" ? styles.messageUser : styles.messageBot
              }`}
            >
              <span
                className={`${styles.bubble} ${
                  msg.sender === "user" ? styles.userBubble : styles.botBubble
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Input */}
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.inputField}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
