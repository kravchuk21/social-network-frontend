import * as yup from "yup";

export const LoginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(12).required(),
}).required();

export const RegisterSchema = LoginSchema.shape({
    name: yup.string().min(2).max(20).required(),
})