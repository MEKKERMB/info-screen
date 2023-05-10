function fetchTv2MidtVestRss() {
return fetch('https://www.tvmidtvest.dk/rss')
.then(response => response.text())
.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
}

export { fetchTv2MidtVestRss };

// async function fetchTv2MidtVestRss() {
//   const response = await fetch('https://www.tvmidtvest.dk/rss')
//   const rssData = await response.text()
//   return rssData;
// }