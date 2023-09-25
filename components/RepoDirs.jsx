import React from 'react'
import { githubUsername } from '@/constants/constants'
import Link from 'next/link'

const username = githubUsername

async function fetchRepoContents(name) {
  // await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}/contents`
  )
  const contents = await response.json()
  return contents
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name)
  const dirs = contents.filter((content) => content.type === 'dir') //contents 타입 필터, dir 따로 저장

  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold">Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={dir.html_url} className="underline">
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RepoDirs
