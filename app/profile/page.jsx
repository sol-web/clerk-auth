import { UserProfile } from '@clerk/nextjs'
import React from 'react'

export const ProfilePage = () => {
  return (
    <div className="mt-20">
      <UserProfile />
    </div>
  )
}

export default ProfilePage
