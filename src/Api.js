async function getData(city = "lviv") {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=49.838261&lon=24.023239&units=metric&exclude=minutely,alerts&appid=a432d601c9f77ef3611c8fccc6aa66e6`);
    const body = await response.json()
    return body
}

export { getData };