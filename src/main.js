import mermaid from "mermaid";
// import { Previewer } from "pagedjs";
// import "pagedjs";

import "@/scss/styles.scss";

import md from "@/paper/thesis.md";

document.querySelector("article").innerHTML = md;

mermaid.initialize({ theme: "neutral" });
mermaid.init(undefined, "code.language-mermaid");

// let paged = new Previewer();
// let flow = paged.preview(document.querySelector("article").innerHTML, [], document.body).then((flow) => {
// 	console.log("Rendered", flow.total, "pages.");
// });
