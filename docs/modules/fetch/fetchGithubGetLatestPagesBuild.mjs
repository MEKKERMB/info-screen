async function fetchGithubGetLatestPagesBuild() {
  const response = await fetch('./data/githubGetLatestPagesBuild.json')
  const latestPagesBuild = await response.json()
  return latestPagesBuild;
}

export { fetchGithubGetLatestPagesBuild }