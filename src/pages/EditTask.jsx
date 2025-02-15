import { ChevronLeftCircleIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function EditTask() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id"); // Obtém o ID dos parâmetros de pesquisa
  const [task, setTask] = useState({ title: "", description: "" });

  useEffect(() => {
    const localtasks = JSON.parse(localStorage.getItem("tasks")) || []; // Obtém todas as tarefas
    const foundTask = localtasks.find((t) => String(t.id) === String(id)); // Busca a tarefa pelo ID
    if (foundTask) setTask(foundTask); // Atualiza o estado com a tarefa encontrada
  }, [id]); // Adicione `id` como dependência

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value })); // Atualiza o estado da tarefa
  };

  const handleSave = () => {
    const localtasks = JSON.parse(localStorage.getItem("tasks")) || []; // Obtém todas as tarefas
    const updatedTasks = localtasks.map(
      (t) => (String(t.id) === String(id) ? { ...t, ...task } : t) // Atualiza apenas a tarefa com o ID correspondente
    );

    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Salva as tarefas atualizadas no localStorage
    Swal.fire({
      icon: "success",
      title: "Salvo com sucesso!",
      showConfirmButton: false,
      timer: 2000,
    });
    navigate(-1); // Retorna para a tela anterior
  };

  return (
    <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            title="Retornar"
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100 p-3"
          >
            <ChevronLeftCircleIcon />
          </button>

          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Editar Tarefa
          </h1>
        </div>
        <div className="bg-slate-200 p-4 rounded-md space-y-4 ">
          <label className="block">
            <span className="text-slate-600 font-bold">Título:</span>
            <input
              type="text"
              name="title"
              value={task.title}
              onChange={handleChange}
              className="w-full mt-2 p-2 rounded border border-slate-300"
            />
          </label>
          <label className="block">
            <span className="text-slate-600 font-bold">Descrição:</span>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
              className="w-full mt-2 p-2 rounded border border-slate-300"
            />
          </label>
          <div className="flex justify-center">
            <button
              title="Salvar Alterações"
              onClick={handleSave}
              className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTask;
