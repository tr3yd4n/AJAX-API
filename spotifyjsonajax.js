let albums = []
let error = false

function searchDeezer(query) {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?" + query, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "0c01d72f5emshe63645a47dfbd72p1da325jsn45dfd936d1e2",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("resolved")


            if (data.data) {
                const object = { title: query, albums: data.data }
                albums.push(object)
                console.log(albums)
            } else {
                error = true
            }
        })
        .catch((err) => {
            console.log("error")
            console.error(err)
            error = true
        })
}

window.onload = function () {
    searchDeezer("eminem")
    searchDeezer("metallica")
    searchDeezer("behemoth")
}