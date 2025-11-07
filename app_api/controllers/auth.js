const userRegister = (req, res) => {
  res.status(200).json({ status: "success" });
};

const userLogin = (req, res) => {
  res.status(200).json({ status: "success" });
};

module.exports = { 
    userRegister, 
    userLogin 
};
