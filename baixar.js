function download(){
	alert("Hello");
}

button=document.createElement("span");
button.setAttribute("class", "uiButtonGroupItem buttonItem");
link=document.createElement("a");
link.setAttribute("aria-label","Download entire conversation");
link.setAttribute("class","uiButtonNoText uiButton uiButtonOverlay");
link.setAttribute("href","#");
link.setAttribute("role","button");
link.setAttribute("onclick","download()");
image=document.createElement("i");
image.setAttribute("class","mrs img sp_8dfw2k sx_606396");
link.appendChild(image);
button.appendChild(link);
document.getElementsByClassName("uiButtonGroup rfloat _ohf uiButtonGroupOverlay")[0].appendChild(button);