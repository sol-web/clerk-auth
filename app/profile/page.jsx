import { UserProfile } from '@clerk/nextjs'
import React from 'react'

export const ProfilePage = () => {
  return (
    <div className="mt-20">
      <UserProfile />
      {/* // UserProfile 불러오기 */}
    </div>
  )
}

export default ProfilePage
