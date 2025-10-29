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

const router = express.Router();

//routes
router.post("/auth/login", login);
router.post("/auth/register", register);
router
  .get("/contacts/:id", getContactById)
  .put("/contacts/:id", updateContactById)
  .delete("/contacts/:id", deleteContactById);
router.get("/contacts", getAllContacts).post("/contacts", createContact);

export default router;
