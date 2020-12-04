//fetch a new blog based on id
//inside each blog
//1.render blog image
//2.render blog content
import { blogContent } from "../components/blogContent.js";
import { blogImage } from "../components/blogImage.js";
import { relatedLinks } from "../components/relatedLinks.js";
import { findBlogById } from "./findBlogById.js";

export const renderNewBlog = (blogId) => {
  const blogObject = findBlogById(blogId)[0];
  const rootDiv = document.getElementById("root");
  rootDiv.innerHTML = "";
  rootDiv.appendChild(blogImage(blogObject.imageUrl));
  rootDiv.appendChild(blogContent(blogObject.title, blogObject.content));
  const asideDiv = document.getElementById("related-links");
  asideDiv.innerHTML = "";
  asideDiv.appendChild(relatedLinks(blogObject.links));
};
