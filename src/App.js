import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import FormMultiStep from "./Task 11/FormMultiStep";
import Result from "./Task 11/Result";
import { UserContext } from "./Task 11/UserContext";

function App() {
  const [user, setUser] = useState({
    nama: "",
    email: "",
    nohp: "",
    bootcamp: "",
    tmpatLahir: "",
    tglLahir: "",
    alamat: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className={styles.App}>
        <Routes>
          <Route path="/" element={<FormMultiStep />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
