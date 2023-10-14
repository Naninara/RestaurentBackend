const RestaRentDb = require("../Model/RestaurentModel");
const GetAllRestarent = async (req, res) => {
  try {
    const data = await RestaRentDb.find({});
    if (data) {
      res.status(200).send(data);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    console.log(err);
  }
};
const GetsingleRestuarent = async (req, res) => {
  const restaurentid = req.params.id;
  const data = await RestaRentDb.findOne({ id: restaurentid });
  if (data) {
    return res.status(200).send(data);
  }
  res.sendStatus(400);
};

module.exports = { GetAllRestarent, GetsingleRestuarent };
