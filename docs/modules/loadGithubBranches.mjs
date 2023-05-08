async function fetchGithubBranches() {
  const response = await fetch('../docs/data/githubBranches.json')
  const branches = await response.json()
  return branches;
}

fetchGithubBranches().then(branches => {
  console.log(branches)
  let commits = document.querySelector("#branches");

  commits.innerHTML = `
  <h1 class="mt-2 text-center text-2xl">
  Repository:
  <span class="font-bold text-blue-500 underline underline-offset-2"
    >info-screen</span
  >
</h1>
<div class="my-auto rounded-lg bg-gray-200 p-2">
  <h2 class="text-xl">Current branches:</h2>
  <div class="ml-4 mt-2 flex flex-col justify-center border-gray-400">
    <p class="border-l-2 border-blue-500 pl-4 text-lg">text</p>
    <p class="mt-2 border-l-2 border-blue-500 pl-4 text-lg">text</p>
    <p class="mt-2 border-l-2 border-blue-500 pl-4 text-lg">text2</p>
    <p class="mt-2 border-l-2 border-blue-500 pl-4 text-lg">text3</p>
  </div>
</div>`;
})