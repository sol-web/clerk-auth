import { UserButton, auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const { userId } = auth()

  return (
    <>
      <nav className="bg-red-900 py-4 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-white mr-2">Clerk Auth</div>
            </Link>
            <div className="up">
              <div className="circle">
                <img
                  src="/squirrel3.jpg"
                  width="50"
                  height="50"
                  className="circle"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center font-bold">
            <Link href="/repos" className="text-gray-300 hover:text-white mr-4">
              Repos
            </Link>
            <Link
              href="/courses"
              className="text-gray-300 hover:text-white mr-4"
            >
              Courses
            </Link>
            {!userId ? (
              // 로그인이 안된 경우
              <>
                <Link
                  href="/sign-in"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Profile
                </Link>
                <div className="ml-auto">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
