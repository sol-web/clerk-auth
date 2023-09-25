import { authMiddleware } from '@clerk/nextjs'
//인증 관리

export default authMiddleware({
  publicRoutes: ['/', '/api/courses', '/api/repos'],
}) //메인페이지는 로그인 없이 볼 수 있음

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
