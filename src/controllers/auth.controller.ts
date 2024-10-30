import { Request, Response } from "express";

const hardcodedUsername = "admin";
const hardcodedPassword = "password";

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Verifikasi username dan password
  if (username === hardcodedUsername && password === hardcodedPassword) {
    // Set session cookie untuk menandakan login
    res.cookie("isAuthenticated", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    return res.json({ message: "Login successful" });
  } else {
    return res.status(401).json({ message: "Invalid username or password" });
  }
};

export const logout = (req: Request, res: Response) => {
  // Hapus cookie untuk logout
  res.clearCookie("isAuthenticated");
  return res.json({ message: "Logout successful" });
};
