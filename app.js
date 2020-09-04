// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
	this.species = species;
	this.image = `images/${species.toLowerCase()}.png`;
	this.weight = weight;
	this.height = height;
	this.diet = diet;
	this.where = where;
	this.when = when;
	this.fact = fact;

	this.sayHello = function(){
		console.log("Hello")
	}
}

// Dino data (from dino.json provided in the starter code)
const dinoData = [
	{
		species: "Triceratops",
		weight: 13000,
		height: 114,
		diet: "herbavor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "First discovered in 1889 by Othniel Charles Marsh",
	},
	{
		species: "Tyrannosaurus Rex",
		weight: 11905,
		height: 144,
		diet: "carnivor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "The largest known skull measures in at 5 feet long.",
	},
	{
		species: "Anklyosaurus",
		weight: 10500,
		height: 55,
		diet: "herbavor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "Anklyosaurus survived for approximately 135 million years.",
	},
	{
		species: "Brachiosaurus",
		weight: 70000,
		height: "372",
		diet: "herbavor",
		where: "North America",
		when: "Late Jurasic",
		fact: "An asteroid was named 9954 Brachiosaurus in 1991.",
	},
	{
		species: "Stegosaurus",
		weight: 11600,
		height: 79,
		diet: "herbavor",
		where: "North America, Europe, Asia",
		when: "Late Jurasic to Early Cretaceous",
		fact:
			"The Stegosaurus had between 17 and 22 seperate places and flat spines.",
	},
	{
		species: "Elasmosaurus",
		weight: 16000,
		height: 59,
		diet: "carnivor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "Elasmosaurus was a marine reptile first discovered in Kansas.",
	},
	{
		species: "Pteranodon",
		weight: 44,
		height: 20,
		diet: "carnivor",
		where: "North America",
		when: "Late Cretaceous",
		fact: "Actually a flying reptile, the Pteranodon is not a dinosaur.",
	},
	{
		species: "Pigeon",
		weight: 0.5,
		height: 9,
		diet: "herbavor",
		where: "World Wide",
		when: "Holocene",
		fact: "All birds are living dinosaurs.",
	},
];

// Create Dino Objects
console.log("dinoData", dinoData);

function init() {
	const dinoObjects = dinoData.map(
		(dino) =>
			new Dino(
				dino.species,
				dino.weight,
				dino.height,
				dino.diet,
				dino.where,
				dino.when,
				dino.fact
			)
	);

	console.log("dinoObjects ", dinoObjects);

	// Create Human Object
	const human = new Dino(
		"Human",
		60,
		5.5,
		"omnivore",
		"worldwide",
		"now",
		"Humans are the most inteligent species on the planet"
	);

	// Use IIFE to get human data from form
	(function getHumanData() {
		human.name = document.getElementById("name").value;
		human.weight = document.getElementById("weight").value;
		human.height =
			document.getElementById("feet").value +
			document.getElementById("inches").value / 12;
		human.diet = document.getElementById("diet").value;
	})();

	console.log("human", human);

}

// Create Dino Compare Method 1: Comparing weight
// NOTE: Weight in JSON file is in lbs, height in inches.
Dino.prototype.compareWeight = function(yourWeight){
	const diff = this.weight - yourWeight;
	return diff > 0 ? `${species} is ${diff} lbs heavier than you !!` : `${species} is ${-diff} lbs lighter than you !!`
}

// Create Dino Compare Method 2:  Comparing height
Dino.prototype.compareHeight = function(yourHeight){
	const diff = this.height - yourHeight;
	return diff > 0 ? `${species} is ${diff} lbs longer than you !!` : `${species} is ${-diff} lbs shorter than you !!`
}


// Create Dino Compare Method 3 : Comparing diet
Dino.prototype.compareDiet= function(yourDiet){
	if(this.diet.toLowerCase() === "omnivor" && this.diet.toLowerCase() === "carnivor"){
		return `${species} can eat you !!`
	}

	if(this.diet.toLowerCase() === "herbavor"){
		return `${species} is safe for you !!`
	}
}

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
const submitBtn = document.querySelector("#btn");

submitBtn.addEventListener("click", init);
