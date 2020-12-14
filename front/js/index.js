import api from "./services/api.js";

function createRowCron(task) {
  // Seleciona e acessa no documento html na classe ".table-hosts" a tag "tbody"
  const rowCronContainer = document.querySelector(".table-hosts tbody");

  // string montada com cada valor colocada em colunas da linha da tabela
  const cronRow = `<tr>
    <td>${task.minutos}</td>
    <td>${task.horas}</td>
    <td>${task.diaMes}</td>
    <td>${task.mes}</td>
    <td>${task.diaSemana}</td>
    <td>${task.tarefa}</td>
  </tr>`;
  
  // inserindo a string cronRow no html na posição antes do fim "before end" da tag tbody
  rowCronContainer.insertAdjacentHTML("beforeend", cronRow);
}

async function loadtask() {
  const tasks = await api.read("/task");

  for (const task of tasks) {
    createRowCron(task);
  }
}

loadtask();