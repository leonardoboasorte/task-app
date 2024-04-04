// Importando as classes e funções a serem testadas
const { Compromisso, Tarefa, adicionarCompromisso, adicionarTarefa, buscarCompromissoPorTitulo, buscarTarefaPorPrioridade } = require('./sua-classe-ou-arquivo');

describeTe('stes para as funções de gerenciamento de compromissos e tarefas', () => {
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
  


});