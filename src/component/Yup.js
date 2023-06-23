import * as Yup from 'yup'

export const LoginSchema =Yup.object({
    email:Yup.string().min(2)
    .matches(/[\w]+[@][A-Z a-z]+[\.][A-Z a-z]+[\.]*[A-Z a-z]*/," Please Enter Valid Email ").required("You must enter the email address"),
    password:Yup.string()
    .matches(/[A-Z][\w]+[@#$!]+[\w][@#$!]*/,"Please enter a strong Password")
    .required("Password cannot be empty")
})
// console.log(Yup)
