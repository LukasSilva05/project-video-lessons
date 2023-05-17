import { listOfExercises } from '../data/videos.js'
import { loadHeader, loadMainContent } from "./main.js";

loadHeader('../index.html', "playlist-Js.html", "playlist-html.html", "arquivosPDF.html")
loadMainContent('Exercícios', listOfExercises)