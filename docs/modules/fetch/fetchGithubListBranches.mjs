async function fetchGithubListBranches() {
  const response = await fetch('../docs/data/githubBranches.json')
  const branches = await response.json()
  return branches;
}

export { fetchGithubListBranches };