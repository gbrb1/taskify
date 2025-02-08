import React from "react";
import TaskManager from "./components/TaskManager"; // Importa o componente TaskManager

// Componente principal da aplicação
function App() {
  return (
    <div className="App">
      <h1>Taskify</h1>
      <TaskManager /> {/* Renderiza o componente TaskManager */}
    </div>
  );
}

export default App;
