import { useState } from "react";
import Swal from "sweetalert2";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={() => setTitle(event.target.value)}
      />
      <input
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        type="text"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={() => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim()) {
            return Swal.fire({
              icon: "warning",
              title: "Campos obrigatórios",
              text: "Por favor, preencha ambos os campos antes de adicionar a tarefa.",
              confirmButtonText: "Entendido",
              customClass: "swal-wide",
              width: "400px",
            });
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
