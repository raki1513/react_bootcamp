import React from 'react'
import './styles.css'
const Form= (props) => {
    const {type, label,placeholder} = props
  return (
    <>
    <div className='formdiv'>
      <form>
        <img src="" alt="" />
        <label htmlFor="" className='label'>{label}</label>
        <br />
        <input type={type} className='inputfield' placeholder={placeholder}/>
        </form>
        </div>
    </>
  )
}

export default Form;
