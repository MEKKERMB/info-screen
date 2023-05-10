async function fetchOpenMeteo() {
  const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=56.45&longitude=9.40&current_weather=true&windspeed_unit=ms&forecast_days=1')
  const weather = await response.json()
  return weather;
}

export { fetchOpenMeteo };

