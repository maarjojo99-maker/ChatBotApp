import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatBot from "./components/ChatBot";
import styles from "./components/ChatBot.module.css";

function App() {
  const [recentChats, setRecentChats] = useState([]);
  const [activeChat, setActiveChat] = useState([]);
  const [chatStarted, setChatStarted] = useState(false);

  const handleNewChat = () => {
    if (activeChat.length > 0) {
      setRecentChats([...recentChats, activeChat]);
    }
    setActiveChat([]);
    setChatStarted(false);
  };

  const handleSelectChat = (index) => {
    setActiveChat(recentChats[index]);
    setChatStarted(true);
  };

  return (
    <div className={styles.appContainer}>
      <Sidebar
        recentChats={recentChats}
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
      />
      <ChatBot
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        chatStarted={chatStarted}
        setChatStarted={setChatStarted}
      />
    </div>
  );
}

export default App;
