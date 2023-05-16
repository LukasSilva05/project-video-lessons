import { loadHeader } from "./main.js";
import { files } from "./pdfs.js";

loadHeader('../index.html', "playlist-Js.html", "playlist-html.html", "playlist-exercicios.html")
loadFiles(files)

function loadFiles(files) {
    const main = document.querySelector('main')

    files.forEach((file, index) => {
        const div = document.createElement('div')

        div.innerHTML = `
            <h3>${file.title}</h3>
        `
        main.appendChild(div)

        file.links.forEach(link => {
            const div = document.querySelectorAll('main div')
            const ol = document.createElement('ol')

            ol.innerHTML = `
                <li>
                    <a href="../img/javascript-icon.jpg" download>${link.fileName}</a>
                </li>
            `
            div[index].appendChild(ol)
        })
    });
}

