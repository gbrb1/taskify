import React, { useState, useEffect } from "react"; // Importa React e hooks para estado e efeitos

// O componente principal que gerencia as tarefas
const TaskManager = () => {
  // Estado para armazenar a lista de tarefas
  const [tasks, setTasks] = useState([]);

  // Estado para armazenar o título de uma nova tarefa
  const [newTaskTitle, setNewTaskTitle] = useState("");

  // useEffect para simular a busca inicial de tarefas
  useEffect(() => {
    // Simula uma lista de tarefas inicial (futuramente será integrado à API)
    const mockTasks = [
      { id: 1, title: "Aprender React", completed: false },
      { id: 2, title: "Estudar Node.js", completed: true },
    ];
    setTasks(mockTasks); // Atualiza o estado com as tarefas simuladas
  }, []); // O array vazio significa que isso será executado apenas uma vez

  // Função para adicionar uma nova tarefa
  const addTask = async () => {
    if (newTaskTitle.trim() === "") return; // Impede adicionar tarefas vazias

    // Envia a tarefa para a API
    const response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTaskTitle }),
    });

    const createdTask = await response.json(); // Recebe a tarefa criada com o ID gerado
    setTasks([...tasks, createdTask]); // Atualiza a lista de tarefas
    setNewTaskTitle(""); // Limpa o campo de entrada
  };

  // Função para alternar o status de conclusão de uma tarefa
  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); // Atualiza o estado com as tarefas alteradas
  };

  // Função para excluir uma tarefa
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks); // Atualiza o estado removendo a tarefa
  };

  // Renderiza a interface do gerenciador de tarefas
  return (
    <div>
      <h2>Task Manager</h2>

      {/* Campo para adicionar uma nova tarefa */}
      <input
        type="text"
        placeholder="Adicione uma tarefa..."
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)} // Atualiza o estado ao digitar
      />
      <button onClick={addTask}>Adicionar</button>

      {/* Lista de tarefas */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none", // Risca se a tarefa estiver concluída
              }}
            >
              {task.title}
            </span>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? "Desfazer" : "Concluir"}
            </button>
            <button onClick={() => deleteTask(task.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager; // Exporta o componente para ser usado em outros lugares
