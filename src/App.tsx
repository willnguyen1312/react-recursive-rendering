import { FC } from "react";
import { FaBeer } from 'react-icons/fa';

import styles from "./App.module.css";

const App: FC = () => {

  return (
    <div className={styles.app}>
      <h3> Lets go for a <FaBeer />? </h3>
    </div>
  );
};

export default App;
