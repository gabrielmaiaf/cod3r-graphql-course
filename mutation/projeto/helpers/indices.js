const { perfis, usuarios } = require('../data/db');

function indicePerfil(id) {
  if (id)
    return perfis.findIndex(u => u.id === id);

  return -1;
}

function indiceUsuario(filtro) {
  if (!filtro) return -1;

  const { id, email } = filtro;
  if (id)
    return usuarios.findIndex(u => u.id === id);
  else if (email)
    return usuarios.findIndex(u => u.email === email);

  return -1;
}

module.exports = {
  indicePerfil,
  indiceUsuario,
}
