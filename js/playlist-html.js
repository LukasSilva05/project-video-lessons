import { listOfHtml } from "./videos.js";
import { loadVideos } from "./main.js";

document.querySelector('.aulas').innerHTML = `${listOfHtml.length < 10 ? '0' + listOfHtml.length : listOfHtml.length} aulas`

loadVideos(listOfHtml)