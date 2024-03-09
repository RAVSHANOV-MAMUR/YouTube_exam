import React from "react";
import AutentificationApp from "./AuthentificationApp";
import UnAutentificationApp from "./UnAuthentificationApp";
import useToken from "./Hooks/useToken"
import "./App.scss"

function App() {
  const [setIsLoggedIn] = useToken();

  if (setIsLoggedIn) {
    return <AutentificationApp />;
  } else {
    return <UnAutentificationApp />;
  }
}
export default App;
