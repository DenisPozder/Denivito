import * as yup from "yup";

// Login validation
const LoginValidation = yup.object().shape({
  email: yup.string().email().required("Email is required").trim(),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must be less than 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
});

// Register validation
const RegisterValidation = yup.object().shape({
  email: yup.string().email().required("Email is required").trim(),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(20, "Password must be less than 20 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number"),
  userName: yup
    .string()
    .required("Username is required")
    .max(20, "Username must be less than 20 characters")
    .matches(/^[a-zA-Z ]*$/, "Username must contain only letters"),
});

export { LoginValidation, RegisterValidation };
