import Pointer from "./Pointer.js";
customElements.define("x-pointer", Pointer);
document.body.style.margin="0";
const container=document.createElement("div");
container.style.backgroundColor="#eee";
container.style.height="200px";
container.style.width="200px";
document.body.appendChild(container);
const pointer=new Pointer();
pointer.init(container, 20, "red");