import React from 'react'
// import Forgotpassword from './Forgotpassword';
import {useState} from 'react'
import { Link } from 'react-router-dom';

import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";  //open eye
import { FaEyeSlash } from "react-icons/fa";   //close eye

const Login = () => {
    const[showPassword, setShowPassword] =useState(false)
    const[data ,setData] = useState({ email:"" ,Password: ""})
    
    const handleOnChange=(e)=>{
        const {name,value}=e.target
        setData((preve)=>{
            return{...preve,[name]:value }
        })
    }
    return (
       <section id='login'>
        {/* /*login full container */}
        <div className='mx-auto container p-20'>   

        
          <div className='bg-white p-5 w-full mx-auto max-w-sm'>

          {/* // image size setting */}
               <div className='w-20 h-20 mx-auto'>                        
                <img src={loginIcons} alt='login' className='mx-auto' />
               </div>
               <form className='pt-6'>
                        <div className='grid'>
                            <label>Email id</label>
                            <div className='bg-slate-100 p-2'>
                                <input type='text' placeholder='Enter the email'
                                name='email'
                                value={data.email}
                                onChange={handleOnChange}
                                
                                className='w-full h-full outline-none bg-transparent'></input>
                            </div>
                        </div>

                        <div>
                            <label>Password</label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input type={showPassword ?'text':'password'} 
                                 placeholder='Enter the password'
                                 name='Password'
                                 value={data.Password}
                                 onChange={handleOnChange}
                                className='w-full h-full outline-none bg-transparent'></input>
                                <div className='p-1 cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                                    <span>
                                        {
                                            showPassword ? <FaEyeSlash /> : <FaEye />
                                        }
                                    </span>
                                </div>

                            </div>
                            <Link to={'/Forgot-password' } className='block w-fit ml-auto hover:underline hover:text-red-600'>Forgot-password</Link>
                        </div>

                        <button className='bg-red-600 text-white mx-auto rounded-full w-full px-6 py-2 max-w-[150px] block hover:scale-110 transition-all mt-4 hover:bg-blue-700'>Login</button>
                    </form>
                    <p className='my-4'>Don't have Account ? <Link to={"/sign-up"} className='text-blue-600 hover:underline hover:text-red-700'>Sign up</Link></p>
          </div>
        </div>

        
       </section>
    )
}
export default Login;