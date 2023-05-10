import { fetchTv2MidtVestRss } from "../../modules/fetch/fetchTv2MidtVestRss.mjs"

fetchTv2MidtVestRss().then(data => {
  console.log(data)
  const list = document.querySelector('#newsFeed');

  const items = data.querySelectorAll("item");
  items.forEach((item) => {

      list.innerHTML += `
    <div class="ticker__item">
      ${item.querySelector("title").textContent}
    </div>`
  })});