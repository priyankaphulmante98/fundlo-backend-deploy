const user = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config()
//hashing function

async function hashPassword(pass) {
  const salt = await bcrypt.genSalt(6);
  const hashedpass = await bcrypt.hash(pass, salt);
  return hashedpass;
}

// comparing  function

async function comparePassword(pass, hashpass) {
  const valid = await bcrypt.compare(pass, hashpass);
  return valid;
}

// all the routes

exports.getUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};
exports.userProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const  {email,role,name,id:_id,image} = await user.findOne({ _id: id });

   
    res.status(200).json({email,role,name,image,id});
  } catch (error) {
    console.log(error);
  }
};

// signup function

exports.signupUsers = async (req, res) => {
  const { email, password, name, image } = req.body;
  try {
    const alreadyexists = await user.findOne({ email });
    let role = "buyer";
    if (alreadyexists) {
      return res.send({
        message: "user already exists please login",
      });
    }
    if (email === "admin@gmail.com" && password === "admin") {
      role = "admin";
    }

    const hashpass = await hashPassword(password);
    const users = user.create({ email, password: hashpass, name, image, role });
    return res.send({
      message: "signup sucessfully",
    });
  } catch (error) {
    console.log(error);
  }
};

//login function

exports.loginUsers = async (req, res) => {
  const { email, password } = req.body;

  try {
    const validateuser = await user.findOne({ email });
    if (validateuser) {
      const check = await comparePassword(password, validateuser.password);
      if (check) {
        let token = jwt.sign(
          {
            id: validateuser._id,
            email: validateuser.email,
            name: validateuser.name,
            role: validateuser.role,
          },
          process.env.SECRET,
          { expiresIn: "10 days" }
        );

        return res.send({
          message: "login successfull",
          token,
          role: validateuser.role,
          userId: validateuser._id,
        });
      } else {
        return res.status(404).send("wrong credentials");
      }
    } else {
      return res.status(404).send("not a valid user please signup");
    }
  } catch (err) {
    console.log(err);
  }
};
