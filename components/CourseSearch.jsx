'use client'
import { useState } from 'react'
//

//({사용자 입력 받음})
const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('')
  // [쿼리를, 입력받은 쿼리]

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/courses/search?query=${query}`) //역따움표, 사용자가 입력한 쿼리값(변수)을 화면에 표시, 응답 받아오기
    const courses = await res.json()
    getSearchResults(courses) //컴포넌트와 연결, 페이지에서 받아온 값을 함수 형태로
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-amber-100 py-2 px-4 m-2 rounded-lg"
      />
      <button
        type="submit"
        className="p-2 m-2 text-white bg-orange-400 hover:bg-orange-600 rounded-lg"
      >
        Search
      </button>
    </form>
  )
}
export default CourseSearch
