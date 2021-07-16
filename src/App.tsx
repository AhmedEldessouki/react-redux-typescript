import React from "react";
import Home from "./pages/home";
import { useAuth } from "./context/authContext";
import "./App.css";
import SignIn from "./components/signin";

function App() {
  const { user } = useAuth();
  return <div className="App">{user ? <Home /> : <SignIn />}</div>;
}

export default App;
