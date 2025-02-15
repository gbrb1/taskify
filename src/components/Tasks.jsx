import {
  ChevronFirst,
  ChevronRightIcon,
  LucideChevronUpCircle,
  TrashIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FiEdit } from "react-icons/fi";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  function editTask(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    query.set("id", task.id);
    navigate(`/edit?${query.toString()}`);
  }

  return (
    tasks.length > 0 && (
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              title={task.isCompleted ? "Desmarcar como concluída" : "Concluir"}
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 text-white p-2 rounded-md w-full ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
            </button>
            <button
              title="Ver Detalhes"
              onClick={() => onSeeDetailsClick(task)}
              className="bg-slate-400 text-white p-2 rounded-md"
            >
              <ChevronRightIcon />
            </button>
            <button
              title="Editar"
              onClick={() => editTask(task)}
              className="bg-slate-400 text-white p-2 rounded-md"
            >
              <FiEdit size={24} />
            </button>
            <button
              title="Excluir"
              onClick={() => {
                Swal.fire({
                  title: "Tem certeza?",
                  html: "Você realmente deseja excluir esta tarefa?<br /> Essa operação não pode ser desfeita.",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#d33",
                  cancelButtonColor: "#3085d6",
                  confirmButtonText: "Sim, excluir!",
                  cancelButtonText: "Cancelar",
                }).then((result) => {
                  if (result.isConfirmed) {
                    onDeleteTaskClick(task.id);
                  }
                });
              }}
              className="bg-slate-400 text-white p-2 rounded-md"
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    )
  );
}

export default Tasks;
