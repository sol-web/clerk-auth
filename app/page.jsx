import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Image src="/mapletree.png" width="1600" height="15" />

      <div className="mx-4">
        <h1 className="text-2xl md-4 mt-5 font-mono font-bold ">
          Welcome to reservoir
        </h1>
        <h2 className="text-lg m-4 font-mono ">
          This is the squirrel's repository.
        </h2>
        <div className="home">
          <div className="mb-5 bg-gray-100 p-4 m-4 mr-10 mt-8 rounded-xl">
            <Link
              href="https://clerk.com/"
              className="text-xl text-blue-700 font-bold m-2"
            >
              clerk.com
            </Link>
            <p className="mb-2 m-2">
              <lib className="text-amber-700">clerk</lib>에서 참고하여 함께
              만들어 봅시다!
            </p>
          </div>
          <div className="mb-5 bg-gray-100 p-4 m-4 mr-10 rounded-xl">
            <Link
              href="https://api.github.com/"
              className="text-xl text-blue-700 font-bold m-2"
            >
              api.github.com
            </Link>
            <p className="mb-2 m-2">
              <lib className="text-amber-700">Fetch API</lib>를 사용하여 github
              저장소 탐색
            </p>
          </div>
          <div className="mb-5 bg-gray-100 p-4 m-4 mr-10 rounded-xl">
            <Link
              href="http://localhost:3000/api/courses"
              className="text-xl text-blue-700 font-bold m-2"
            >
              Backend API
            </Link>
            <p className="m-2">
              웹 개발에 대한 폭넓은 강좌 정보를 제공하는{' '}
              <lib className="text-amber-700">Backend API</lib> 서비스 제공
            </p>
          </div>
        </div>
        <div className="float-right mt-5 mr-3 p-1 bg-amber-100 rounded-lg w-64">
          <div className=" mt-4 mb-4 mx-8 text-amber-900 font-mono">
            <p className="mb-3 font-bold">you know what?</p>
            <p className="font-serif">
              <p>" 상단의 다람쥐 사진에 마우스를 올려보세요! "</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
