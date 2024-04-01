import React from 'react'
import './form-header.css'

const FormHeader = ({title, text}) => {
  return (
    <div className='form_header'>
        <h1>{title}</h1>
        <h2>{text}</h2>
    </div>
  )
}

export default FormHeader