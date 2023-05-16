import { listOfJs } from "./videos.js";
import { loadVideos, loadHeader, loadMainContent } from "./main.js";

loadHeader('../index.html', "playlist-html.html", "arquivosPDF.html", "playlist-exercicios.html")
loadMainContent('Javascript')
document.querySelector('.aulas').innerHTML = `${listOfJs.length < 10 ? '0' + listOfJs.length : listOfJs.length} aulas`
loadVideos(listOfJs)