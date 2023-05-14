import { listOfJs } from "./videos.js";
import { loadVideos } from "./main.js";

document.querySelector('.aulas').innerHTML = `${listOfJs.length < 10 ? '0' + listOfJs.length : listOfJs.length} aulas`

loadVideos(listOfJs)