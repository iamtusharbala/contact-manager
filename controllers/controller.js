import User from "../models/userModel.js";
import Contact from "../models/contactModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//login contoller

const createToken = (id) => {
  const token = jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: "1d" });
  return token;
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const check = await User.findOne({ email });
    if (check) {
      const checkPassword = bcrypt.compareSync(password, check.password);
      if (checkPassword) {
        const token = createToken(check._id);

        return res.status(200).json({
          status: true,
          message: "User logged in successfully...",
          token
        });
      }
      return res.status(400).json({
        status: false,
        message: "Incorrect password...",
      });
    }
    return res.status(400).json({
      status: false,
      message: "User does not exist...",
    });
  } catch (error) {
    next(error);
  }
};

//register controller
export const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const check = await User.findOne({ email });
    if (check) {
      return res.status(409).json({
        status: false,
        message: "User already exists...",
      });
    }

    const hashPass = bcrypt.hashSync(password, 10);
    const createUser = await User.create({ email, password: hashPass });
    if (createUser) {
      return res.status(201).json({
        status: true,
        message: "User registered successfully..",
        data: createUser,
      });
    }
  } catch (error) {
    next(error);
  }
};

//get All Contacts
export const getAllContacts = async (req, res, next) => {
  try {
    const getContacts = await Contact.find();
    if (getContacts.length > 0) {
      return res.status(201).json({
        status: true,
        length: getContacts.length,
        data: getContacts,
      });
    } else {
      return res.status(201).json({
        status: true,
        message: "No contacts found..",
      });
    }
  } catch (error) {
    next(error);
  }
};

//Create Contact
export const createContact = async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const checkNumber = await Contact.findOne({ phone });
    if (checkNumber) {
      return res.status(400).json({
        status: false,
        message: "Phone Number already exists..",
      });
    }
    const newContact = await Contact.create({ name, email, phone });
    if (newContact) {
      return res.status(201).json({
        status: true,
        message: "Number added successfully..",
        data: newContact,
      });
    }
  } catch (error) {
    next(error);
  }
};

//get ContactbyId
export const getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findContact = await Contact.findById(id);
    if (findContact) {
      return res.status(200).json({
        status: true,
        message: "Contact fetched successfully..",
        data: findContact,
      });
    }
    return res.status(400).json({
      status: false,
      message: "Contact doesn't exist...",
    });
  } catch (error) {
    next(error);
  }
};

//update Contact
export const updateContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    const findContact = await Contact.findByIdAndUpdate(
      id,
      { name, email, phone },
      { new: true }
    );
    if (findContact) {
      return res.status(200).json({
        status: true,
        message: "Contact updated successfully..",
        data: findContact,
      });
    }
    return res.status(400).json({
      status: false,
      message: "Contact doesn't exist...",
    });
  } catch (error) {
    next(error);
  }
};

//Delete contact
export const deleteContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findContact = await Contact.findByIdAndDelete(id);
    if (findContact) {
      return res.status(200).json({
        status: true,
        message: "Contact deleted successfully..",
        data: findContact,
      });
    }
    return res.status(400).json({
      status: false,
      message: "Contact doesn't exist...",
    });
  } catch (error) {
    next(error);
  }
};
