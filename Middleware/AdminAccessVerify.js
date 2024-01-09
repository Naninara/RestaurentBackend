const rolesVerify = (req, res, next) => {
  if (!req.roles) res.sendStatus(403);
  const ele = [];

  const access = req.roles.find((ele) => {
    return ele === 2500;
  });

  if (access) next();
  else {
    res.sendStatus(403);
  }
};

module.exports = rolesVerify;
