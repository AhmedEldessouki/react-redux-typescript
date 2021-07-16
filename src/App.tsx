import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { useAuth } from "./context/authContext";
import Home from "./pages/home";
import SignIn from "./components/signin";
import "./App.css";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? (
        <Provider store={store}>
          <Home />
        </Provider>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default App;
