








function createElement(parent, addClass, type) {
	let el = document.createElement(type);
	parent.appendChild(el);
	el.classList.add(addClass);
	return el;
}


