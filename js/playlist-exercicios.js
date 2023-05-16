import { listOfExercises } from "./videos.js";
import { loadVideos, loadHeader, loadMainContent } from "./main.js";

loadHeader('../index.html', "playlist-Js.html", "playlist-html.html", "arquivosPDF.html")
loadMainContent('Exercícios')
document.querySelector('.aulas').innerHTML = `${listOfExercises.length < 10 ? '0' + listOfExercises.length : listOfExercises.length} aulas`
loadVideos(listOfExercises)