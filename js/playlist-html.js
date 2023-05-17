import { listOfHtml } from '../data/videos.js'
import { loadVideos, loadHeader, loadMainContent } from "./main.js";


loadHeader('../index.html', "playlist-Js.html", "arquivosPDF.html", "playlist-exercicios.html")
loadMainContent('HTML', listOfHtml)
loadVideos(listOfHtml)