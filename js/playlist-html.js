import { listOfHtml } from '../data/videos.js'
import { loadHeader, loadMainContent } from "./main.js";

loadHeader('../index.html', "playlist-Js.html", "playlist-vscode.html")
loadMainContent('HTML', listOfHtml)