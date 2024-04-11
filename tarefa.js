// Definindo a classe para representar tarefas
class Tarefa {
    constructor(descricao, prioridade) {
      this.descricao = descricao;
      this.prioridade = prioridade;
    }
  }
  
  // Lista de tarefas
  let tarefas = [];
  
  // Função para adicionar uma nova tarefa
  function adicionarTarefa(descricao, prioridade) {
    const tarefa = new Tarefa(descricao, prioridade);
    tarefas.push(tarefa);
  }
  
  // Função para buscar tarefas por prioridade
  function buscarTarefaPorPrioridade(prioridade) {
    return tarefas.filter(tarefa => tarefa.prioridade === prioridade);
  }
  
  // Exportando a classe e funções relacionadas a tarefas
  module.exports = { Tarefa, adicionarTarefa, buscarTarefaPorPrioridade };
