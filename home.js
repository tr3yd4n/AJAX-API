function switchContent(classOnOff) {
    const trending = document.getElementById("home-trending-content")
    const podcasts = document.getElementById("home-podcast-content")
    const genres = document.getElementById("home-genres-content")
    const newContent = document.getElementById("home-new-content")
    const discover = document.getElementById("home-discover-content")
    switch (classOnOff) {
        case "TRENDING":
            trending.classList.remove("d-none")
            podcasts.classList.add("d-none")
            genres.classList.add("d-none")
            newContent.classList.add("d-none")
            discover.classList.add("d-none")
            break
        case "PODCASTS":
            podcasts.classList.remove("d-none")
            trending.classList.add("d-none")
            genres.classList.add("d-none")
            newContent.classList.add("d-none")
            discover.classList.add("d-none")
            break
        case "GENRES":
            genres.classList.remove("d-none")
            trending.classList.add("d-none")
            podcasts.classList.add("d-none")
            newContent.classList.add("d-none")
            discover.classList.add("d-none")
            break
        case "NEW":
            newContent.classList.remove("d-none")
            trending.classList.add("d-none")
            podcasts.classList.add("d-none")
            genres.classList.add("d-none")
            discover.classList.add("d-none")
            break
        case "DISCOVER":
            discover.classList.remove("d-none")
            trending.classList.add("d-none")
            podcasts.classList.add("d-none")
            genres.classList.add("d-none")
            newContent.classList.add("d-none")
            break
        default:
            console.error("Error")
    }
}