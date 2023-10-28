const RestaRentDb = require("../Model/MenuModel");
const CuisineController = async (req, res) => {
  const name = req.params.name;
  await RestaRentDb.find({ cuisines: { $all: [`${name}`] } })
    .then((response) => res.send(response))
    .catch((err) => {
      res.status(401).json(err);
    });
};

module.exports = CuisineController;
