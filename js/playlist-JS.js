import { listOfJs } from '../data/videos.js'
import { loadVideos, loadHeader, loadMainContent } from "./main.js";

loadHeader('../index.html', "playlist-html.html", "arquivosPDF.html", "playlist-exercicios.html")
loadMainContent('Javascript', listOfJs)
loadVideos(listOfJs)