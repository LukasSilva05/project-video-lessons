import { listOfJs } from '../data/videos.js'
import { loadHeader, loadMainContent } from "./main.js";

loadHeader('../index.html', "playlist-html.html", "playlist-vscode.html")
loadMainContent('Javascript', listOfJs)