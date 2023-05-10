async function fetchGithubGetLatestPagesBuild() {
  const response = await fetch('../docs/data/githubGetLatestPagesBuild.json')
  const latestPagesBuild = await response.json()
  return latestPagesBuild;
}

export { fetchGithubGetLatestPagesBuild }