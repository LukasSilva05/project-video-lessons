import { listOfExercises } from "./videos.js";
import { loadVideos } from "./main.js";

document.querySelector('.aulas').innerHTML = `${listOfExercises.length < 10 ? '0' + listOfExercises.length : listOfExercises.length} aulas`

loadVideos(listOfExercises)