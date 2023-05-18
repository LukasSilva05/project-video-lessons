import { files } from "../data/pdfs.js";
import { loadHeader } from "./main.js";

loadHeader('../index.html', "playlist-Js.html", "playlist-html.html", "playlist-exercicios.html")
loadFiles(files)

function loadFiles(files) {
    const main = document.querySelector('main')

    files.forEach((file, index) => {
        const div = document.createElement('div')

        div.innerHTML = `
            <h3>${file.title}</h3>
            <ol></ol>
        `
        main.appendChild(div)

        const ol = document.querySelectorAll('main div ol')

        file.links.forEach(link => {
            const li = document.createElement('li')

            li.innerHTML = `
                <a href="../img/javascript-icon.jpg" download>${link.fileName}</a>
            `
            ol[index].appendChild(li)
        })
    });
}