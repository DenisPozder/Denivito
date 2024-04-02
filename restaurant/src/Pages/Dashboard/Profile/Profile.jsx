import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import UserHeader from '../../../Components/UserHeader/UserHeader'

const Profile = () => {
  return (
    <Sidebar>
      <UserHeader title={"update profile"} />
    </Sidebar>
  )
}

export default Profile