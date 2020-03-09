const { perfis, proximoPerfilId } = require('../../data/db');
const { indicePerfil } = require('../../helpers/indices');

module.exports = {
  novoPerfil(_, { nome }) {
    const perfilExistente = perfis.some(p => p.nome === nome);

    if (perfilExistente)
      throw new Error('Perfil já existente');

    const newPerfil = {
      id: proximoPerfilId(),
      nome
    }

    perfis.push(newPerfil);

    return newPerfil;
  },
  alterarPerfil(_, { id, nome }) {
    const i = indicePerfil(id);

    if (i < 0) return null;

    perfis[i].nome = nome;

    return perfis[i];
  },
  excluirPerfil(_, { id }) {
    const i = indicePerfil(id);

    if (i < 0) return null;

    const excluido = perfis.splice(i, 1);
    return excluido ? excluido[0] : null;
  }
}