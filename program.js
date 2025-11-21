let main = document.querySelector(".main");

let textField = createElement(main, "cTextField", "textarea");

let sourceField = createElement(main, "cSourceField", "div");

sourceField.addEventListener("click", function () {
	let initialField = createElement(main, "cInitialField", "div");

	let [bc, col] = formatColors();
	initialField.style.background = bc;
	initialField.style.color = col;

	initialField.addEventListener("dblclick", function () {
		switchDisplay(textField, "block");

		textField.addEventListener("dblclick", bindTextField);

			function bindTextField () {
				textField.removeEventListener("dblclick", bindTextField);
				initialField.innerHTML = textField.value;
					 textField.value = '';
			switchDisplay(textField, "none");
			
		}
	})

})


function switchDisplay(elem, valueDisplay) {
	elem.style.display = valueDisplay;
}


function createElement(parent, addClass, type) {
	let el = document.createElement(type);
	parent.appendChild(el);
	el.classList.add(addClass);
	return el;
}

function formatColors() {
	let arRes = [];
	let st1 = "#";
	let st2 = "#";
	for (let i = 0; i < 3; i++) {
		let ar = getTwo(8);   // !!!!!!!!! менять цвета
		st1 += ar[0];
		st2 += ar[1];
	}
	arRes[0] = st1;
	arRes[1] = st2;
	return arRes;


	function getTwo(n) {
		let max = 15;
		let arRes = [];
		let ran = random(max);
		let ran2;
		if (ran + n <= max) {
			ran2 = ran + n;
		} else {
			ran2 = ran + n - max;
		}
		arRes[0] = convertDecInHex(ran);
		arRes[1] = convertDecInHex(ran2);
		return arRes;
	}

	function random(max) {
		return Math.floor(Math.random() * (max - 1));
	}
}


function convertDecInHex(num) {
	let objConvert = {"a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15};

	if (num < 10) {
		return num;
	} else {
		for (let key in objConvert) {
			if (num === objConvert[key]) {
				return key;
			}
		}
	}
}

