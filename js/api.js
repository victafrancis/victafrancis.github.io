window.onload = function() {
    
    axios.get('https://icanhazdadjoke.com/')
        .then(response => {
            // console.log(response.data)
        })
        .catch(error => console.error(error));

    // request Nasa Image of the Day from API
    console.log(getDate())
    nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + getDate();
    axios.get(nasaUrl)
        .then(response => {
            console.log("nasa url: " + response.data.url);
            //check media type
            if(response.data.media_type=="image") {
                document.getElementById("nasaImg").src = response.data.url;
                document.getElementById("nasaImgUrl").href = response.data.url;
                document.getElementById("nasaVid").src = "https://www.youtube.com/embed/GwDLhTRkdPg";
            } else {
                document.getElementById("nasaVid").src = response.data.url;
            }
            document.getElementById("nasaImgTitle").innerHTML = response.data.title;
            document.getElementById("nasaModalTitle").innerHTML = response.data.title;
            document.getElementById("nasaModalDate").innerHTML = response.data.date;
            document.getElementById("nasaModalDescription").innerHTML = response.data.explanation;
            document.getElementById("nasaApiUrl").href = nasaUrl;
            console.log(response.data.title)
            console.log(response.data.explanation)
            console.log(response.data.url)
            console.log(response.data)
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

getDate = () => {
    var today = new Date();
    var dd = today.getDate() - 1;
    
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