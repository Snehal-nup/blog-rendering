import { blogs } from "./data.js";
import { blogImage } from "./components/blogImage.js";
import { blogContent } from "./components/blogContent.js";
import { relatedLinks } from "./components/relatedLinks.js";

const rootDiv = document.getElementById("root");
rootDiv.appendChild(blogImage(blogs[0].imageUrl));
rootDiv.appendChild(blogContent(blogs[0].title, blogs[0].content));
const asideDiv = document.getElementById("related-links");
asideDiv.appendChild(relatedLinks(blogs[0].links));
