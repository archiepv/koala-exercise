/*----- Javascript Document -----*/
//1. get the element we want, attach listener

let clickable = document.querySelector("img.clickable")
clickable.addEventListener("click", clickCounter)

let counter = 0
console.log("counter: ", counter)

//click handler function
function clickCounter(){
	//track total clicks- increment the counter variable
	//counter = counter + 1
	counter++

	//output click count to container in DOM
	console.log("counter", counter)

	//get the container, update its contents
	let output = document.querySelector("p#clickcount")
	output.innerHTML = counter
	document.title = counter

	if (counter === 10 || counter === 20) {
		output.setAttribute("class", "color")
	} else {
		output.removeAttribute("class", "color")
	}
}