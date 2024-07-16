import "./App.scss";
import { Outlet } from "react-router-dom";
import AllContextProvider from "./AllContext";

function App() {
  return (
    <AllContextProvider>
      <Outlet />
    </AllContextProvider>
  );
}

export default App;
