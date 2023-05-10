import { fetchGithubListBranches } from "../../modules/fetch/fetchGithubListBranches.mjs";
import { fetchGithubCommitActivity } from "../../modules/fetch/fetchGithubCommitActivity.mjs";
import { fetchGithubClosedPullRequests } from "../../modules/fetch/fetchGithubClosedPullRequests.mjs";
import { fetchGithubGetLatestPagesBuild } from "../../modules/fetch/fetchGithubGetLatestPagesBuild.mjs";
import { fetchOpenMeteo } from "../../modules/fetch/fetchOpenMeteo.mjs";

fetchGithubListBranches().then(listBranches => {
  console.log(listBranches)
  let branches = document.querySelector("#branchesContent");

  listBranches.forEach(branch => {
    branches.innerHTML += `
  <div class="mt-2 rounded-lg bg-gray-200">
    <div class="ml-4 mt-2 flex flex-col justify-center border-gray-400">
      <p class="mt-2 border-l-2 border-blue-500 pl-4 font-bold text-lg">${branch.name}</p>
    </div>`
  })
})

fetchGithubCommitActivity().then(commitActivity => {
  console.log(commitActivity)
  let commits = document.querySelector("#commitsContent");

  commitActivity.forEach(commit => {
    commits.innerHTML += `
  <div class="rounded-lg bg-gray-200 p-2">
    <div class="ml-4 mt-2 flex flex-col justify-center border-gray-400">
      <p class="border-l-2 border-blue-500 pl-4 text-lg text-green-600 font-bold">${commit[1] + " ++"}</p>
      <p class="border-l-2 border-blue-500 mt-4 pl-4 text-lg text-red-600 font-bold">${commit[2] + " --"}</p>
    </div>
  </div>`
  })
})

fetchGithubClosedPullRequests().then(closedPullRequests => {
  console.log(closedPullRequests)
  let PullRequests = document.querySelector("#pullRequestContent");
  

  closedPullRequests.forEach(pullRequest => {
    PullRequests.innerHTML += `
    <div id="pullRequestContent" class="ml-4 mt-4 flex flex-col justify-center">
    <h3 class="border-l-2 border-blue-500 pl-4 text-lg font-bold">${pullRequest.title}</h3>
    <div class="ml-4">
      <p class="mt-2 pl-4">
        <span class="font-bold">State:</span>
        ${pullRequest.state}
      </p>
      <p class="mt-2 pl-4">
        <span class="font-bold">closed at:</span>
        ${pullRequest.closed_at}
      </p>
    </div>
  </div>`
  })
})

fetchGithubGetLatestPagesBuild().then(latestPagesBuild => {
  console.log(latestPagesBuild)
  let latestPagesBuilds = document.querySelector("#latestPagesBuildContent");

  latestPagesBuilds.innerHTML += `
  <div id="pullRequestContent" class="ml-4 mt-4 flex flex-col justify-center">
  <h3 class="border-l-2 border-blue-500 pl-4 text-lg">
    <span class="font-bold">State:</span>
    ${latestPagesBuild.status}
  </h3>
  <div class="ml-4">
    <p class="mt-2 pl-4">
      <span class="font-bold">Created at:</span>
      ${latestPagesBuild.created_at}
    </p>
  </div>
</div>
  `
})

fetchOpenMeteo().then(weather => {
  console.log(weather)
  let weatherContent = document.querySelector("#weatherContent");

  weatherContent.innerHTML += `
  <h3 class="border-l-2 border-blue-500 pl-4 text-3xl">${weather.current_weather.temperature} &#8451</h3>`
})