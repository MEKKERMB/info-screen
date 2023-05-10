async function fetchGithubCommitActivity() {
  const response = await fetch('../docs/data/githubCommitActivity.json')
  const commitActivity = await response.json()
  return commitActivity;
}

export { fetchGithubCommitActivity };