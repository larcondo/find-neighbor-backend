const { getTables } = require('../../database');

const tables = async (req, res) => {
  try {
    const resultado = await getTables();
    res.status(200).send(
      {
        tablas: resultado.map(t =>
          ({ type: t.type, name: t.name })
        )
      }
    );
  } catch(e) {
    console.log(e?.message);
    res.status(500).send({ error: '/tables ERROR' });
  }
};

module.exports = {
  tables,
};