// Importando as classes e funções a serem testadas
const { Compromisso, Tarefa, adicionarCompromisso, adicionarTarefa, buscarCompromissoPorTitulo, buscarTarefaPorPrioridade } = require('../../script.js');

describe('Testes para as funções de gerenciamento de compromissos e tarefas', () => {
  // Antes de cada teste, limpar as listas de compromissos e tarefas
  beforeEach(() => {
    compromissos = [];
    tarefas = [];
  });

  // Teste para a função adicionarCompromisso
  test('Deve adicionar um novo compromisso à lista de compromissos', () => {
    adicionarCompromisso("Reunião de equipe", "2024-04-05");
    expect(compromissos.length).toBe(1);
    expect(compromissos[0].titulo).toBe("Reunião de equipe");
    expect(compromissos[0].data).toBe("2024-04-05");
  });
  
 // Teste para a função adicionarTarefa
test('Deve adicionar uma nova tarefa à lista de tarefas', () => {
  adicionarTarefa("Enviar relatório financeiro", "Alta");
  expect(tarefas.length).toBe(1);
  expect(tarefas[0].descricao).toBe("Enviar relatório financeiro");
  expect(tarefas[0].prioridade).toBe("Alta");
  });

// Teste para a função buscarCompromissoPorTitulo
test('Deve retornar os compromissos que correspondem ao título fornecido', () => {
  adicionarCompromisso("Reunião de equipe", "2024-04-05");
  adicionarCompromisso("Consulta médica", "2024-04-07");
  const compromissosEncontrados = buscarCompromissoPorTitulo("reunião");
  expect(compromissosEncontrados.length).toBe(1);
  expect(compromissosEncontrados[0].titulo).toBe("Reunião de equipe");
});

 // Teste para a função buscarTarefaPorPrioridade
 test('Deve retornar as tarefas que correspondem à prioridade fornecida', () => {
  adicionarTarefa("Enviar relatório financeiro", "Alta");
  adicionarTarefa("Comprar mantimentos", "Baixa");
  const tarefasAltaPrioridade = buscarTarefaPorPrioridade("Alta");
  expect(tarefasAltaPrioridade.length).toBe(1);
  expect(tarefasAltaPrioridade[0].descricao).toBe("Enviar relatório financeiro");
});

});


