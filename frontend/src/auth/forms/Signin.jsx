import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Heading from '../../components/Heading'
import Subheading from '../../components/Subheading'
import InputBox from '../../components/InputBox'
import Button from '../../components/Button'
import BottomWarning from '../../components/BottomWarning'

const Signin = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
    <div className='flex '>
      <div className=' bg-black h-screen w-1/2 flex justify-center '>
        <div className='flex flex-col justify-center w-80'>
          <div className='bg-gray-400 rounded-2xl w-full h-max p-2 px-4 text-center'>
            <Heading label={"Sign Up"}/>
            <Subheading label={"Log in to your account"}/>
            <InputBox label={"Username"} onchange={e=>{setUsername(e.target.value)}}/>
            <InputBox label={"Password"} onchange={e=>{setPassword(e.target.value)}}/>
            <Button label={"Sign Up"} 
              onclick={async()=>{
              const response = await axios.post('http://localhost:3000/api/v1/user/signin',{
                username,
                password
              });
              localStorage.setItem('token',response.data.token);
              navigate('/');
            }}/>
            <BottomWarning label={"New User?"} buttontext={"Sign Up"} to={'/signup'}/>
          </div>
        </div>
      </div>
      <img 
            className="w-1/2"
            src="/images/logo.png" 
            alt="logo" />
    </div>
    </>
  )
}

export default Signin