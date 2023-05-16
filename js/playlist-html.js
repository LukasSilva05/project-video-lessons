import { listOfHtml } from "./videos.js";
import { loadVideos, loadHeader, loadMainContent } from "./main.js";


loadHeader('../index.html', "playlist-Js.html", "arquivosPDF.html", "playlist-exercicios.html")
loadMainContent('HTML')
document.querySelector('.aulas').innerHTML = `${listOfHtml.length < 10 ? '0' + listOfHtml.length : listOfHtml.length} aulas`
loadVideos(listOfHtml)