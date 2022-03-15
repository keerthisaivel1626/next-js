import styles from "../styles/Home.module.css";
import List from "./component/List";
import users from "./api/data/data";

export default function Home() {
  return (
    <div className={styles.container}>
      <List users={users}></List>
    </div>
  );
}
