import React from 'react'
import Heading from '../../components/Heading'
import Subheading from '../../components/Subheading'
import InputBox from '../../components/InputBox'
import Button from '../../components/Button'
import BottomWarning from '../../components/BottomWarning'

const Signin = () => {
  return (
    <>
      <div className=' bg-black h-screen flex justify-center '>
        <div className='flex flex-col justify-center w-80'>
          <div className='bg-gray-400 rounded-2xl w-100 h-max p-2 px-4 text-center'>
            <Heading label={"Sign Up"}/>
            <Subheading label={"Log in to your account"}/>
            <InputBox label={"Username"} onchange={e=>{setUsername(e.target.value)}}/>
            <InputBox label={"Password"} onchange={e=>{setPassword(e.target.value)}}/>
            <Button label={"Sign Up"} onclick={()=>{}}/>
            <BottomWarning label={"New User?"} buttontext={"Sign Up"} to={'/signup'}/>
          </div>
        </div>
      </div>
      <div className='hidden xl:block h-screen object-cover w-1/2 '><img src="/images/logo.png" alt="logo" />hi</div>
    </>
  )
}

export default Signin