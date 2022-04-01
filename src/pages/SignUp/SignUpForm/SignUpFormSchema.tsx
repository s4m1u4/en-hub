import * as yup from "yup";

export const SignUpFormSchema = yup.object({
  firstName: yup
    .string()
    .matches(/^[A-z]{4,15}$/, "Enter a valid first name")
    .required("First name is required"),
  lastName: yup
    .string()
    .matches(/^[A-z]{4,15}$/, "Enter a valid last name")
    .required("Last name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must be at least 6 characters, one number, one capital letter and one special characters ['!', '@', '$', '%', '&', '*']"
    )
    .required("Password is required"),
});
