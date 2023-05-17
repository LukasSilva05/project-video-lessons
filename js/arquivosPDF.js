import { files } from "../data/pdfs.js";
import { loadHeader, loadFiles } from "./main.js";

loadHeader('../index.html', "playlist-Js.html", "playlist-html.html", "playlist-exercicios.html")
loadFiles(files)
