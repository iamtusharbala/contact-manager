import express from "express";
import {
  login,
  register,
  createContact,
  getAllContacts,
  getContactById,
  updateContactById,
  deleteContactById,
} from "../controllers/controller.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

//routes
router.post("/auth/login", login);
router.post("/auth/register", register);
router
  .get("/contacts/:id", auth, getContactById)
  .put("/contacts/:id", auth, updateContactById)
  .delete("/contacts/:id", auth, deleteContactById);
router
  .get("/contacts", auth, getAllContacts)
  .post("/contacts", auth, createContact);

export default router;
