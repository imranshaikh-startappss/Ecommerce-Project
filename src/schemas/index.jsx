import * as Yup from "yup"

export const signUpSchema = Yup.object({
    name: Yup.string().min(3).required("Please Enter your name") ,
    email: Yup.string().matches(/[\w]+[@][A-Z a-z]+[\.][A-Z a-z]+[\.]*[A-Z a-z]*/," Please Enter Valid Email ").required("Please Enter your email") ,
    password: Yup.string().matches(/[A-Z][\w]+[@#$!]+[\w][@#$!]*/,"Please enter a strong Password").min(6).required("Please Enter your password") ,
    confirm_password: Yup.string().required().oneOf([Yup.ref('password'), null], "Password must match"),
})
console.log(Yup)
// console.log(Yup.object)
