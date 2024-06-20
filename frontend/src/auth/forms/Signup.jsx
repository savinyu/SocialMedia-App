import React, { useState } from 'react'
import Heading from '../../components/Heading'
import Subheading from '../../components/Subheading'
import InputBox from '../../components/InputBox'
import BottomWarning from '../../components/BottomWarning'
import Button from '../../components/Button'

const Signup = () => {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  return (
    <>
    <div className=' bg-black h-screen flex justify-center '>
      <div className='flex flex-col justify-center w-80'>
        <div className='bg-gray-400 rounded-2xl w-100 h-max p-2 px-4 text-center'>
          <Heading label={"Sign Up"}/>
          <Subheading label={"Create your new account"}/>
          <InputBox label={"First Name"} onchange={e=>{setFirstName(e.target.value)}}/>
          <InputBox label={"Last Name"} onchange={e=>{setLastName(e.target.value)}}/>
          <InputBox label={"Username"} onchange={e=>{setUsername(e.target.value)}}/>
          <InputBox label={"Password"} onchange={e=>{setPassword(e.target.value)}}/>
          <Button label={"Sign Up"} onclick={()=>{}}/>
          <BottomWarning label={"Already have an account"} buttontext={"Sign In"} to={'/signin'}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup