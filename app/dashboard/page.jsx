import { auth, currentUser } from '@clerk/nextjs'
import React from 'react'

const DashboardPage = async () => {
  const { userId } = auth()
  const user = await currentUser()

  return (
    <div>
      <h1 className="text-2xl fonst-bold mb-5 mt-20 ">Dashboard</h1>
      <p className="mb-5">Welcom to Dashboard</p>
      <table border={5} width="800px">
        <tr>
          <th rowSpan={2}>UserID:</th>
          <th rowSpan={2}>{userId}</th>
        </tr>
        <tr>
          <td>username:</td>
          <td rowSpan={2}> {user?.username}</td>
        </tr>
      </table>
    </div>
  )
}

export default DashboardPage
