import Link from 'next/link'
import React from 'react'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'
import { githubUsername } from '@/constants/constants'

const username = githubUsername

async function fetchRepos() {
  const username = githubUsername

  const response = await fetch(`https://api.github.com/users/${username}/repos`)

  // const response = await fetch(`https://api.github.com/users/${username}/repos`)
  // await new Promise((resolve) => setTimeout(resolve, 1000))

  const repos = await response.json()
  return repos
} //비동기식 함수

const ReposPage = async () => {
  const username = githubUsername
  const repos = await fetchRepos()
  // console.log(repos)

  // key = repo.id, repos가 각각의 repo를 불러옴
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Github Repositories of {username}
      </h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className="bg-orange-300 m-4 p-4 rounded-lg">
            <Link href={`/repos/${repo.name}`}>
              <h3 className="text-xl font-bold">{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1">
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaEye /> {repo.stargazers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <ul>리포지터리 정보 제공</ul>
    </div>
  )
}
export default ReposPage
