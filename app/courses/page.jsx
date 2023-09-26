'use client' //서치, 브라우저가, 클라이언트 페이지
import Courses from '@/components/Courses'
import { useState, useEffect } from 'react'
import LoadingPage from '../loading'
import CourseSearch from '@/components/CourseSearch'

const CoursesPage = () => {
  const [courses, setCourses] = useState([]) //사용자 이벤트에 따라 setCourese(함수) 변경으로 사용 가능  ---set대문자
  const [loading, setLoading] = useState(true) //정보를 받아오는 정도, 로딩 중인 경우/정보가 다 왔을 때 처리

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses') //같은 서버 안에 있기 때문에 localhost:3000 대신 사용가능
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }

    fetchCourses()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 mt-20">Courses </h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </div>
  )
}
export default CoursesPage
