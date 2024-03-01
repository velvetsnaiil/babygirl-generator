const imageArray = [
"https://pbs.twimg.com/media/Fa49WCHWIAAHQC5?format=jpg&name=large",
"https://pbs.twimg.com/media/F98yeCRXwAAsrXl?format=jpg&name=large",
"https://soundlesswind.tumblr.com/image/189698178652"	
"https://pbs.twimg.com/media/F85Z1bObYAAljUg?format=jpg&name=large",
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}
