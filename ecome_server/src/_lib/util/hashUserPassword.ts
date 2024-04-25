import bcrypt from "bcrypt";
export const HashPassword = async (
  password: string,
  saltround: number
): Promise<string> => {
  return await bcrypt.hash(password, saltround);
};
