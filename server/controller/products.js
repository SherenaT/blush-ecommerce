module.exports = {
  getAllProducts: async (req, res) => {
    const db = await req.app.get("db");
    const allProducts = await db.all_products([]);
    console.log(allProducts);
    res.status(200).send(allProducts);
  },
  bachelorette: async (req, res) => {
    const db = await req.app.get("db");
    const bachelorette = await db.bachelorette([]);
    console.log(bachelorette);
    res.status(200).send(bachelorette);
  },
  headbands: async (req, res) => {
    const db = await req.app.get("db");
    const headbands = await db.headbands([]);
    console.log(headbands);
    res.status(200).send(headbands);
  },
};
