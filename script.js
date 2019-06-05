import Pointer from "./Pointer.js";
customElements.define("x-pointer", Pointer);
const container=document.createElement("div");
container.style.height="200px";
container.style.width="200px";
document.body.appendChild(container);
const pointer=new Pointer();
pointer.init(container, 20);
