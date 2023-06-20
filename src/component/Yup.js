import * as Yup from 'yup'

export const LoginSchema =Yup.object({
    email:Yup.string().email().min(2).max(25).required("Plese enter a valid email address"),
    password:Yup.string().min(8).required("Plese enter your password")
})
// console.log(Yup)