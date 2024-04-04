import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import UserHeader from '../../../Components/UserHeader/UserHeader'
import ProfileForm from './Components/ProfileForm/ProfileForm'
import PasswordForm from './Components/PasswordForm/PasswordForm'

const Profile = () => {
  return (
    <Sidebar>
      <UserHeader title={"update profile"} />
      <ProfileForm />
      <UserHeader title={"change password"} />
      <PasswordForm />
    </Sidebar>
  )
}

export default Profile