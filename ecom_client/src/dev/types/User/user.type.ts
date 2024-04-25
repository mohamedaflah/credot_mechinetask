export interface User {
  email: string;
  name: string;
  password: string;
  _id?: string;
  role: "admin" | "user";
  createdAt: Date;
  updatedAt: Date;
  status: boolean;
}
