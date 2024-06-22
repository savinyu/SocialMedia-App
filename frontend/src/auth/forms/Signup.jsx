import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import Heading from '../../components/Heading'
import Subheading from '../../components/Subheading'
import InputBox from '../../components/InputBox'
import BottomWarning from '../../components/BottomWarning'
import Button from '../../components/Button'

const Signup = () => {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
    <div className='flex'>
      <div className=' bg-black h-screen w-1/2 flex justify-center '>
        <div className='flex flex-col justify-center w-80'>
          <div className='bg-gray-400 rounded-2xl w-100 h-max p-2 px-4 text-center'>
            <Heading label={"Sign Up"}/>
            <Subheading label={"Create your new account"}/>
            <InputBox label={"First Name"} onchange={e=>{setFirstName(e.target.value)}}/>
            <InputBox label={"Last Name"} onchange={e=>{setLastName(e.target.value)}}/>
            <InputBox label={"Username"} onchange={e=>{setUsername(e.target.value)}}/>
            <InputBox label={"Password"} onchange={e=>{setPassword(e.target.value)}}/>
            <Button label={"Sign Up"} 
              onclick={async()=>{
              const response = await axios.post('http://localhost:3000/api/v1/user/signup',{
                username,
                firstName,
                lastName,
                password
              });
              localStorage.setItem('token',response.data.token);
              navigate('/');
              }}
              />
            <BottomWarning label={"Already have an account"} buttontext={"Sign In"} to={'/signin'}/>
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

export default Signup