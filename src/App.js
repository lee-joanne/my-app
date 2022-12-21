import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container"
import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import Homepage from "./pages/Homepage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/contact" element={<ContactPage />}/>
        </Routes>
      </Container>
    </div>
  );
}


export default App;
