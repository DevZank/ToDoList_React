import React, { useState } from "react";
import "./ListaTarefas.css";

function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);

  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      setTarefas([...tarefas, novaTarefa]);

      setNovaTarefa("");
    }
  };

  const removerTarefa = (index) => {
    const novasTarefas = [...tarefas];

    novasTarefas.splice(index, 1);

    setTarefas(novasTarefas);
  };

  return (
    <main>
      <div className="ToDoContainer">
        <h1>Lista de Tarefas</h1>

        <div className="AddTask">
          <input
            type="text"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
            placeholder="Add Task"
          />

          <button className="BtnADD" onClick={adicionarTarefa}>
            <i class="ri-add-line"></i>
          </button>
        </div>

        <div className="TaskContainer">
          <ul>
            {tarefas.map((tarefa, index) => (
              <li key={index}>
                {tarefa}{" "}
                <button onClick={() => removerTarefa(index)}>
                  <i class="ri-check-fill"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default ListaDeTarefas;
