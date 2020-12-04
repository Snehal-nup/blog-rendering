export const blogContent = (title, content) => {
  const div = document.createElement("div");
  div.classList.add("blog-content");
  const h1 = document.createElement("h1");
  h1.innerText = title;
  const p = document.createElement("p");
  p.innerText = content;
  div.appendChild(h1);
  div.appendChild(p);
  //need to return
  return div;
};
