import React from 'react'
import Login from './Login'

const LoginHeader = () => {
  return (
    <div>
        <div className="flex flex-col flex-auto w-full h-screen ">
<div className="h-full">
<div className="grid grid-cols-3 h-full ">
<div className="bg-blue-900 bg-cover lg:flex bg-no-repeat hidden"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLY0ouBhxfBOWURo6Nt12gAQuocV7Xx0h_w&usqp=CAU" alt='img'/></div>
<div className="col-span-2 flex justify-center items-center">
 <div className='min-w-[450] px-8'>
    <div className='mb-8'>
        <h1 className='text-3xl font-medium'>Welcome Back</h1>
        <p>Please enter your credentails to sing in!</p>
    </div>
    <Login/>
 </div> 
</div>
 
</div>
 </div>
    </div>

    </div>
  )
}

export default LoginHeader