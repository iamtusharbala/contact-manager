import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const authHeader = req.headers.Authorization || req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      status: false,
      message: `Token required to access ${req.path}`,
    });
  }
  const authToken = authHeader.split(" ")[1];
  if (!authToken) {
    return res.status(401).json({ message: "Malformed token" });
  }
  jwt.verify(authToken, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  });
};
