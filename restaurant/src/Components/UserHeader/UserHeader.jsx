import React from 'react'
import './user-header.css'

const UserHeader = ({title}) => {
  return (
    <div className='user_header'>
        <h1>{title}</h1>
    </div>
  )
}

export default UserHeader