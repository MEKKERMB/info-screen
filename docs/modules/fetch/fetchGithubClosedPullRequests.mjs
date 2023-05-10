async function fetchGithubClosedPullRequests() {
  // const response = await fetch('../docs/data/githubClosedPullRequests.json')
  const response = await fetch('./data/githubClosedPullRequests.json')
  const closedPullRequests = await response.json()
  return closedPullRequests;
}

export { fetchGithubClosedPullRequests }