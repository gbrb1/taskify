import { ChevronLeftCircleIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
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
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2
            title="Nome"
            className="text-xl  font-bold text-slate-600 text-center"
          >
            {title}
          </h2>
          <p title="Descrição   " className="text-slate-600 text-center ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
