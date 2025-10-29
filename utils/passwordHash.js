import bcrypt from "bcrypt";

export const passwordHash = (plainPasswordText) =>
  bcrypt.hashSync(plainPasswordText, 10);

export const comparePassword = (plainPasswordText, hashedPassword) =>
  bcrypt.compareSync(plainPasswordText, hashedPassword);
