async function fetchGithubClosedPullRequests() {
  const response = await fetch('../docs/data/githubClosedPullRequests.json')
  const closedPullRequests = await response.json()
  return closedPullRequests;
}

export { fetchGithubClosedPullRequests }