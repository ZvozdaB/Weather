async function getData(id=1, cord) {

    let urlDaily = `https://api.openweathermap.org/data/2.5/onecall?lat=${cord.lat}&lon=${cord.lng}&units=metric&exclude=minutely,alerts,hourly&appid=a432d601c9f77ef3611c8fccc6aa66e6`;
    let url5Day = `https://api.openweathermap.org/data/2.5/forecast?lat=${cord.lat}&lon=${cord.lng}&units=metric&appid=a432d601c9f77ef3611c8fccc6aa66e6`
    let url;
    switch(id){
        case 1 :
            url = urlDaily;
            break;
        case 2 :
            url = url5Day;
            break;
        default:
            break;

    }
    const response = await fetch(url);
    const body = await response.json()
    return body
}



export { getData };