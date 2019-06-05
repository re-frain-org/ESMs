export class Pointer extends HTMLElement{
	constructor(){
		super();
		const pointer=this;
		pointer.style.cursor="pointer";
		pointer.style.display="block";
		pointer.style.left="0px";
		pointer.style.position="absolute";
		pointer.style.top="0px";
	}
	/**
	 * Setup and append to parent element.
	 *
	 * @param {HTMLElement} parent as parent element of pointer.
	 * @param {Number}      size   as size of pointer.
	 * @param {String}      color  as color of pointer.
	 * @this {Pointer}
	 */
	init(parent, size, color){
		const parentHeight=parent.clientHeight,
			parentWidth=parent.clientWidth,
			pointer=this,
			size2=size/2;
		let POINTER_STATE=false;
		parent.appendChild(pointer);
		pointer.style.backgroundColor=color;
		pointer.style.borderRadius=`${size2}px`;
		pointer.style.height=`${size}px`;
		pointer.style.width=`${size}px`;
		pointer.addEventListener("click",event=>POINTER_STATE=!POINTER_STATE,false);
		const parentNode=pointer.parentNode;
		parent.addEventListener("mouseleave",event=>POINTER_STATE=false,false);
		parent.addEventListener("mousemove",event=>{
			let {pageX, pageY}=event;
			pageX<size2?pageX=size2:pageX>parentWidth-size2?pageX=parentWidth-size2:0;
			pageY<size2?pageY=size2:pageY>parentHeight-size2?pageY=parentHeight-size2:0;
			if(POINTER_STATE){
				pointer.style.left=pageX-size2+"px";
				pointer.style.top=pageY-size2+"px";
			}
		},false);
	}
}
