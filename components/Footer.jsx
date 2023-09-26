import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <nav className="bg-amber-950 py-3 px-8">
        <div className="flex items-center justify-between container">
          <div className="left first-letter: 20px ">
            <Image src="/jbulogo.jpg" width="100" height="40" />
          </div>
          <div className="right-20 text-red-800">정보보호학과</div>
        </div>
      </nav>
    </>
  )
}

export default Footer
