const { usuarios, perfis } = require('../data/db');

module.exports = {
  ola() {
    return 'Hello world!'
  },
  horaAtual() {
    return new Date
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: "Ana da Web",
      email: "anadaweb@email.com",
      idade: 23,
      salario_real: 1234.56,
      vip: true
    }
  },
  produtoEmDestaque() {
    return {
      nome: 'Relógio Xiaomi',
      preco: 299.99,
      desconto: 0.05
    }
  },
  numerosMegaSena() {
    const cresc = (a, b) => a - b;
    return Array(6).fill(0).map(() => parseInt(Math.random() * 60 + 1)).sort(cresc)
  },
  usuarios() {
    return usuarios
  },
  usuario(_, { id }) {
    const selecionados = usuarios.filter(u => u.id === parseInt(id, 10));
    return selecionados ? selecionados[0] : null
  },
  perfis() {
    return perfis
  },
  perfil(_, { id }) {
    const perfilSel = perfis.filter(u => u.id === parseInt(id, 10))
    return perfilSel ? perfilSel[0] : null
  }
}