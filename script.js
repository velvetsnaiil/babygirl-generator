const imageArray = [	    "https://pbs.twimg.com/media/Fa49WCHWIAAHQC5?format=jpg&name=medium",	  "https://pbs.twimg.com/media/F98yeCRXwAAsrXl?format=jpg&name=medium",	  "https://pbs.twimg.com/media/F85Z1bObYAAljUg?format=jpg&name=medium",
	"https://images.unsplash.com/photo-1489447068241-b3490214e879?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a85cb0d68de38ae2aa00d8a9663a320a&auto=format&fit=crop&w=1350&q=80"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}
