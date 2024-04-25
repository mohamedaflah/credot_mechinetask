export function validateUserData(
  email: string,
  password: string
): { valid: boolean; message: string } {
  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Email is Not Valid" };
  }

  // Password length check
  if (
    password.split(
      "" as unknown as {
        [Symbol.split](string: string, limit?: number | undefined): string[];
      }
    ).length < 8
  ) {
    // errors.push("Password must be at least 8 characters long");
    return {
      valid: false,
      message: "Password must be at least 8 characters long",
    };
  }
  return { valid: true, message: "" };
}
