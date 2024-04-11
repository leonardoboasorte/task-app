const { Compromisso, adicionarCompromisso, buscarCompromissoPorTitulo } = require('./compromisso');

// Teste para a classe Compromisso
test('Criar um novo compromisso', () => {
  const compromisso = new Compromisso('Reunião de equipe', '2024-04-05');
  expect(compromisso.titulo).toBe('Reunião de equipe');
  expect(compromisso.data).toBe('2024-04-05');
});

// Teste para adicionar um compromisso
test('Adicionar um novo compromisso', () => {
  adicionarCompromisso('Consulta médica', '2024-04-07');
  const compromissos = buscarCompromissoPorTitulo('Consulta');
  expect(compromissos.length).toBe(1);
  expect(compromissos[0].titulo).toBe('Consulta médica');
});

