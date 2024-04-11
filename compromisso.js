// Definindo a classe para representar compromissos
class Compromisso {
    constructor(titulo, data) {
      this.titulo = titulo;
      this.data = data;
    }
  }
  
  // Lista de compromissos
  let compromissos = [];
  
  // Função para adicionar um novo compromisso
  function adicionarCompromisso(titulo, data) {
    const compromisso = new Compromisso(titulo, data);
    compromissos.push(compromisso);
  }
  
  // Função para buscar compromissos por título
  function buscarCompromissoPorTitulo(titulo) {
    return compromissos.filter(compromisso => compromisso.titulo.toLowerCase().includes(titulo.toLowerCase()));
  }
  
  // Exportando a classe e funções relacionadas a compromissos
  module.exports = {
    Compromisso,
    adicionarCompromisso,
    buscarCompromissoPorTitulo
  };
