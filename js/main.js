export function loadVideos(arrayVideos) {
    const listVideos = document.querySelector('.video-list')
    const [mainVideo, title, description] = document.querySelector('.main-video .video').children

    mainVideo.src = arrayVideos[0].src
    title.innerHTML = arrayVideos[0].title
    description.innerHTML = arrayVideos[0].description

    arrayVideos.forEach((video, index) => {
        const div = document.createElement("div");

        div.innerHTML = `
        <div class="${index + 1 === 1 ? "vid active" : "vid"}">
            <img src="${video.thumb}"/>
            <div>
                <h3 class="title">${video.title}</h3>
                <small class="subtitle">${video.subtitle}</small>
            </div>
        </div>
        `
        listVideos.appendChild(div)
    })
    clickOnVideo(arrayVideos)
}

function clickOnVideo(arrayVideos) {
    const listVideos = document.querySelectorAll('.video-list .vid')
    const [mainVideo, title, description] = document.querySelector('.main-video .video').children

    listVideos.forEach((video, index) => {
        video.addEventListener('click', () => {
            listVideos.forEach(vid => vid.classList.remove('active'))
            video.classList.add('active')

            if (video.classList.contains('active')) {
                mainVideo.src = arrayVideos[index].src
                title.innerHTML = arrayVideos[index].title
                description.innerHTML = arrayVideos[index].description
            }
        })
    })
}