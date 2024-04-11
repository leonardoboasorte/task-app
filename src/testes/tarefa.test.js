const { Tarefa, adicionarTarefa, buscarTarefaPorPrioridade } = require('./tarefa');

// Teste para a classe Tarefa
test('Criar uma nova tarefa', () => {
  const tarefa = new Tarefa('Enviar relatório financeiro', 'Alta');
  expect(tarefa.descricao).toBe('Enviar relatório financeiro');
  expect(tarefa.prioridade).toBe('Alta');
});

// Teste para adicionar uma tarefa
test('Adicionar uma nova tarefa', () => {
  adicionarTarefa('Comprar mantimentos', 'Baixa');
  const tarefas = buscarTarefaPorPrioridade('Baixa');
  expect(tarefas.length).toBe(1);
  expect(tarefas[0].descricao).toBe('Comprar mantimentos');
});
