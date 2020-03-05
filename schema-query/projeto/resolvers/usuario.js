const { perfis } = require('../data/db');

module.exports = {
  salario(usuario) {
    return usuario.salario_real
  },
  perfil(usuario) {
    const sets = perfis.filter(p => p.id === usuario.perfil_id)
    return sets ? sets[0] : null
  }
}