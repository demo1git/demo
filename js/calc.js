window.onload = function () {
	var buttons = document.getElementsByTagName("span"),
		result = document.querySelectorAll(".result p")[0],
		clear = document.getElementsByClassName("clear")[0];

	for (var i = 0; i < buttons.length; i += 1) {
		if (buttons[i].innerHTML === "=") {
			buttons[i].addEventListener("click", calculate(i));
		} else {
			buttons[i].addEventListener("click", addValue(i));
		}
	}

	// clear values
	clear.onclick = function () {
		result.innerHTML = "";
	};

	// added value
	function addValue(i) {
		return function () {
			if (buttons[i].innerHTML === "÷") {
				result.innerHTML += "/";
			} else if (buttons[i].innerHTML === "x") {
				result.innerHTML += "*";
			} else {
				result.innerHTML += buttons[i].innerHTML;
			}
		};
	}

	// Calculate function
	function calculate(i) {
		return function () {
			var final_res = result.innerHTML;

			var bugFix = final_res.replace(/\d+/g, function (numb) {
				return parseInt(numb, 10);
			});

			result.innerHTML = eval(bugFix);
		};
	}
};
