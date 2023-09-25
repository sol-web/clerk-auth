import Link from 'next/link'

// async function fetchCourses() {
//   const response = await fetch('http://localhost:3000/api/courses') //임시 주소
//   const courses = response.json()
//   return courses
// }

//async 비동기화식
const Courses = async ({ courses }) => {
  // const courses = await fetchCourses()

  return (
    <div className="grid-1 ">
      {courses?.map((course) => (
        <div
          key={course.id}
          className="bg-orange-300 p-4 m-4 text-slate-950-00 rounded-lg"
        >
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p className="mb-4">{course.description}</p>
          <Link
            href={course.link}
            target="_blank"
            className="py-2 px-4 bg-orange-700 hover:bg-orange-800 text-white rounded-lg mb-4"
          >
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Courses
