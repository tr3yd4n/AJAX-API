let albums = []
let error = false
window.onload = function () {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", { //retrieve info from api
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "0c01d72f5emshe63645a47dfbd72p1da325jsn45dfd936d1e2",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("resolved")
            console.log(data)
            if (data.data) {
                albums = data.data
            }
            else {
                error = true
            }

        })
        .catch((err) => {
            console.log("error")
            console.error(err)
            error = true
        })
}