import jwt from "jsonwebtoken";
export const getPayloadFromJWT = (token: string): { userId: string,role:"user"|"admin" } => {
  const payload = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
  return payload as { userId: string,role:"user"|"admin" };
};
