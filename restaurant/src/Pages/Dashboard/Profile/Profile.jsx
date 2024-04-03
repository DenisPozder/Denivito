import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import UserHeader from '../../../Components/UserHeader/UserHeader'
import ProfileForm from './Components/ProfileForm/ProfileForm'

const Profile = () => {
  return (
    <Sidebar>
      <UserHeader title={"update profile"} />
      <ProfileForm />
    </Sidebar>
  )
}

export default Profile