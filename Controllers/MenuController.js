const MenuDb = require("../Model/MenuModel");
const GetAllMenuItems = async (req, res) => {
  try {
    const data = await MenuDb.find({});
    if (data) {
      res.status(200).send(data);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    console.log(err);
  }
};
const GetsingleMenuItems = async (req, res) => {
  const restaurentid = req.params.id;
  const data = await MenuDb.findOne({ id: restaurentid });
  if (data) {
    return res.status(200).send(data);
  }
  res.sendStatus(400);
};

module.exports = { GetAllMenuItems, GetsingleMenuItems };
