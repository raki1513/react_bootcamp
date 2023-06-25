import React from 'react'
import './styles.css'
const Button= (props) => {
    const {name}=props
  return (
    <>
    <button className='button1'>Sign In {name}</button>
    <a href="#"><p>Forgot Password?</p></a>
    </>
  )
}

export default Button
