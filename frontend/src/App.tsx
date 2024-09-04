import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Botão 1</h1>
      <Button titulo="Primeiro botão" />
      <h1>Botão 2</h1>
      <Button titulo="Segundo botão" />
    </>
  );
}

export default App;
