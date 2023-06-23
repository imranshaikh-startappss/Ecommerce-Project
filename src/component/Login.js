import React from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { LoginSchema } from './Yup'
import { login } from '../Store/Slices/Slice'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router'

const initialValues = {
    email: "",
    password: "",

}
const Login = () => {
    const dispatch = useDispatch()


    const { values, handleBlur, touched, handleSubmit, handleChange, errors } = useFormik({
        initialValues,
        validationSchema: LoginSchema,


        onSubmit: (values, action) => {
            if (values) {
                // console.log(values)
                // dispatch(singUpUser({email,password}))

                dispatch(login(values))
                action.resetForm()
            } else {
                console.log(errors)
            }
        }

    })
    // console.log(errors)


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='mb-3 '>
                    <label className='font-meduim mb-2 flex'>Email</label>
                    <input type='text' name='email' value={values.name} autoComplete='off' placeholder='Enter your email' className='w-full border rounded-md bg-transparent border-gray-400 p-3  '
                        onChange={handleChange} onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) : null}

                </div>
                <div className='mb-3'>
                    <label className='font-meduim mb-2 flex'>Password</label>
                    <input type='text' name='password' value={values.password} autoComplete='off' placeholder='Enter your password' className='w-full border rounded-md bg-transparent border-gray-400 p-3  '
                        onChange={handleChange} onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (<p className='form-password'>{errors.password}</p>) : null}
                </div>
                <div className='flex justify-between mb-6'>
                    <label>
                        <input type='checkbox' className='mr-2' />
                        Remember me
                    </label>
                    <span>Forgot Password?</span>
                </div>
                <button type="submit" className='block bg-blue-700 hover:bg-blue-800 text-white w-full py-2 px rounded '>Sign In </button>
                <div className='mt-4 text-center'>Don't have an account yet? <Link to="/signUp" className='text-blue-700 cursor-pointer'>Sign up</Link></div>



            </form>
        </>
    )
}

export default Login