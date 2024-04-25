import jwt from "jsonwebtoken";
export const generateToken = (payload: any): string => {
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY as string, {
    expiresIn: "15d",
  });
  return token;
};
