import { auth, currentUser } from '@clerk/nextjs'
import React from 'react'

const DashboardPage = async () => {
  const { userId } = auth()
  const user = await currentUser()

  return (
    <div>
      <h1 className="text-2xl fonst-bold mb-5 mt-20 ">Dashboard</h1>
      <p className="mb-10">Welcom to Dashboard</p>

      <div>
        <p className="text-amber-900 text-2xl"> UserID:</p> {userId}
      </div>
      <div className="mt-3">
        <p className="text-amber-900 text-2xl mt-5">username: </p>
        {user?.username}
      </div>
    </div>
  )
}

export default DashboardPage
