import * as React from "react";
import styles from "./app.module.css";

export default function App() {
  const [leaveOnTime, setLeaveOnTime] = React.useState(false);

  const handleToggle = () => {
    setLeaveOnTime((oldLeaveOnTime) => !oldLeaveOnTime);
  };

  const answer = leaveOnTime ? "Sim" : "Não";

  return (
    <div className={styles.question}>
      <h1 className={styles.text}>Vamos largar às 22h hoje?</h1>
      <div onClick={handleToggle} className={styles.display}>
        {answer}
      </div>
    </div>
  );
}
