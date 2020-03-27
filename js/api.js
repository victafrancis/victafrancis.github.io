window.onload = function() {
    
    axios.get('https://icanhazdadjoke.com/')
        .then(response => {
            // console.log(response.data)
        })
        .catch(error => console.error(error));


    // request Nasa Image of the Day from API
    nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + getDateToday();
    axios.get(nasaUrl)
        .then(response => {
            console.log("nasa url: " + response.data.url);
            document.getElementById("nasaImg").src = response.data.url;
            document.getElementById("nasaImgUrl").href = response.data.url;
            document.getElementById("nasaImgTitle").innerHTML = response.data.title;
            document.getElementById("nasaModalTitle").innerHTML = response.data.title;
            document.getElementById("nasaModalDate").innerHTML = response.data.date;
            document.getElementById("nasaModalDescription").innerHTML = response.data.explanation;
            document.getElementById("nasaApiUrl").href = nasaUrl;
        })
        .catch(error => console.error(error));

    // request random dad joke
    axios({
        method: 'get',
        url: 'https://icanhazdadjoke.com/',
        headers: {
            Accept: 'text/plain'
        }
    })
        .then(response => {
            document.getElementById("dadJoke").innerHTML = response.data;
        })
        .catch(error => console.error(error));

    
}

getDateToday = () => {
    var today = new Date();
    var dd = today.getDate();
    
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    }

    today = yyyy+'-'+mm+'-'+dd;
    return today;
}