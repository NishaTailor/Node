const user = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    const { email } = req.body
    let isExists = await user.findOne({ email: email })
    if (isExists) {
      return res.send("users already Exists")
    }

    else {
      let user = await user.create(req.body);
      return res.status(201).json(user);
    }


  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getusers = async (req, res) => {
  try {
    let users = await user.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

const getuserById = async (req, res) => {
  try {
    const { userId } = req.params;
    let user = await user.findById(userId);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

const updateuser = async (req, res) => {
  let { userId } = req.params;
  try {
    let user = await user.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

const deleteuser = async (req, res) => {
  try {
    const { userId } = req.params;
    let user = await user.findByIdAndDelete(userId);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};




const login = async (req, res) => {
  const { email, password } = req.body
  let isExists = await User.findOne({ email: email })
  if (!isExists) {
    return res.send("user not found")
  }
  if (isExists.password != password) {
    return res.send("invalid password")
  }

  return res.send("logged in")

}


// pages
const getLoginPage = (req, res) => {
  res.render("login")
}
const getSignupPage = (req, res) => {
  res.render("signup")
}

module.exports = {
  getusers,
  getuserById,
  createUser,
  updateuser,
  deleteuser,
  getLoginPage,
  getSignupPage,
  login
};