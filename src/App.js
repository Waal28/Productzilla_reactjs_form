import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import FormMultiStep from "./Task 11/FormMultiStep";
import Result from "./Task 11/Result";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<FormMultiStep />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
