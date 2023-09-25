import { NextResponse } from 'next/server'
import courses from '../data.json'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  // 사용자가 주소창에 쿼리 형태로 요청, searchParams로 받기

  const query = searchParams.get('query')

  //courses --'../data.json'에서 읽어 옴
  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(query.toLowerCase())
  })
  return NextResponse.json(filteredCourses)
}
