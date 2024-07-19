import "./App.scss";
import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AllContext } from "./AllContext";

function App() {
  const { checkLoginStatus } = useContext(AllContext);

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  return <Outlet />;
}

export default App;
