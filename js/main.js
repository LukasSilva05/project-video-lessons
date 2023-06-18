export function loadHeader(...links) {
    const header = document.querySelector('header')

    header.innerHTML = `
        <section class='topbar'>
            <h2>Logo</h2>
            <nav></nav>
        </section>
    `
    const topbar = document.querySelector('.topbar nav')

    links.forEach(link => {
        const a = document.createElement('a')

        a.innerHTML = `
            <a href="${link}">
                <h3>${link.includes('index') ? 'Início' : link.includes('playlist-html') ? 'HTML' : link.includes('playlist-Js') ? 'JavaScript' : 'VS Code'}</h3>
            </a>
        `

        topbar.appendChild(a)
    })
}

export function loadMainContent(title, listPage) {
    const main = document.querySelector('main')

    main.innerHTML = `
        <div class="main-video">
            <div class="video">
                <iframe src="" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    allowfullscreen></iframe>
                <h3 class="title"></h3>
                <span class="description"></span>
            </div>
        </div>
        <div class="video-list-div">
            <div class="video-list-title">
                <h1>${title}</h1>
                <h4 class="aulas">${listPage.length < 10 ? '0' + listPage.length : listPage.length} aulas</h4>
            </div>
            <div class="video-list"></div>
        </div>
    `
    loadVideos(listPage)
}

function loadVideos(arrayVideos) {
    const listVideos = document.querySelector('.video-list')
    const [mainVideo, title, description] = document.querySelector('.main-video .video').children

    mainVideo.src = arrayVideos[0].src + '?autoplay=1'
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
                mainVideo.src = arrayVideos[index].src + '?autoplay=1'
                title.innerHTML = arrayVideos[index].title
                description.innerHTML = arrayVideos[index].description
            }
        })
    })
}