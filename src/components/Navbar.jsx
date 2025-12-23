import styles from "./ChatBot.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img
        src="https://via.placeholder.com/40"
        alt="Logo"
        className={styles.logo}
      />
      <h1 className={styles.title}>My ChatBot</h1>
    </div>
  );
};

export default Navbar;
