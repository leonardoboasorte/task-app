// Definindo uma classe para representar compromissos
class Compromisso {
    constructor(titulo, data) {
      this.titulo = titulo;
      this.data = data;
    }
  }
  
  // Definindo uma classe para representar tarefas
  class Tarefa {
    constructor(descricao, prioridade) {
      this.descricao = descricao;
      this.prioridade = prioridade;
    }
  }
  
  // Lista de compromissos
  let compromissos = [];
  
  // Lista de tarefas
  let tarefas = [];
  
  // Função para adicionar um novo compromisso
  function adicionarCompromisso(titulo, data) {
    const compromisso = new Compromisso(titulo, data);
    compromissos.push(compromisso);
  }
  
  // Função para adicionar uma nova tarefa
  function adicionarTarefa(descricao, prioridade) {
    const tarefa = new Tarefa(descricao, prioridade);
    tarefas.push(tarefa);
  }
  
  // Função para buscar compromissos por título
  function buscarCompromissoPorTitulo(titulo) {
    return compromissos.filter(compromisso => compromisso.titulo.toLowerCase().includes(titulo.toLowerCase()));
  }
  
  // Função para buscar tarefas por prioridade
  function buscarTarefaPorPrioridade(prioridade) {
    return tarefas.filter(tarefa => tarefa.prioridade === prioridade);
  }
  
  // Adicionar alguns compromissos e tarefas de exemplo
  adicionarCompromisso("Reunião de equipe", "2024-04-05");
  adicionarCompromisso("Consulta médica", "2024-04-07");
  adicionarTarefa("Enviar relatório financeiro", "Alta");
  adicionarTarefa("Comprar mantimentos", "Baixa");
  
  // Exemplo de uso das funções de busca
  console.log("Compromissos encontrados:", buscarCompromissoPorTitulo("reunião"));
  console.log("Tarefas de alta prioridade:", buscarTarefaPorPrioridade("Alta"));
  