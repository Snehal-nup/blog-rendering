import { blogs } from "../data.js";
import { renderNewBlog } from "../helper/renderNewBlog.js";

{
  /* <div id="image-content">
  <img src="" alt="" />
</div>; */
}

export const blogImage = (imageUrl) => {
  const div = document.createElement("div");
  div.classList.add("image-content");
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "blog image";

  div.appendChild(img);
  //need to return
  return div;
};
