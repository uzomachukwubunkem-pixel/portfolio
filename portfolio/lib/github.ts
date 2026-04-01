export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
}

export async function fetchSelectedRepos(
  username: string,
  selectedNames: string[]
): Promise<GitHubRepo[]> {
  if (selectedNames.length === 0) return []
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
  )
  if (!res.ok) throw new Error('Failed to fetch GitHub repos')
  const allRepos: GitHubRepo[] = await res.json()
  return allRepos.filter((repo) => selectedNames.includes(repo.name))
}