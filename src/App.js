import "./App.css";
import "./components/style.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter, Route, Routes, Router, Switch } from "react-router-dom";


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const [Mode, setMode] = useState("light");
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        About="AboutUtils"
        mode={Mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading="Input Output" mode={Mode} />
    </>
  );
}

export default App;


