import "../css/components.css";
//import logoWebpack from "../assets/img/webpack-logo.png";

export const hello = (name) => {
  const root = document.querySelector("#root");
  const h1 = document.createElement("h1");
 // const img = document.createElement("img");

  h1.innerText = `Hola, ${name}`;
  //img.src = logoWebpack;

  root.append(h1);
  //root.append(img);
};
