import styles from "./ChatBot.module.css";
import sidebarImage from "../assets/logo.png";
const Sidebar = ({ recentChats, onNewChat, onSelectChat }) => {
  return (
    <div className={styles.sidebar}>
      {/* Sidebar image/logo */}
      <img
        src={sidebarImage}
        alt="Sidebar"
        className={styles.sidebarImage}
      />
      <hr />

      {/* New Chat button */}
      <button className={styles.newChatBtn} onClick={onNewChat}>
        + New Chat
      </button>


      {/* Recent chats */}
      <div className={styles.recentChats}>
        <h3>Recent</h3>
        {recentChats.length === 0 && <p style={{ textAlign: "center" }}>No chats yet</p>}
        {recentChats.map((chat, idx) => (
          <div
            key={idx}
            className={styles.chatItem}
            onClick={() => onSelectChat(idx)}
          >
            {chat[0]?.text || "Empty Chat"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
