
let trainer = {
	name: 'Hanzen',
	age: 19,
	pokemon: ['Mudflap', 'Torchic', 'Treecko', 'Pikachu'],
	friends: {
		name: 'SmallAnt',
		age: 26
	},
	talk: function() {
		console.log('Pikachu! I choose you!');
	}
};

console.log(trainer['age']);
console.log(trainer['friends']);
trainer.talk();

function Pokemon(name, level) {
	this.name = name;
	this.level = level;
	this.health = 2 * level;
	this.attack = (0.5 * level) + level;
	//methods
	
	this.tackle = function(target) {
		console.log(`${this.name} tackled ${target.name}`)
		target.health = target.health - this.attack;
		console.log(`${target.name}'s health has reduced to ${target.health}`)

		if(target.health == 0 || target.health < 0) {
			target.faint();
			
		}
	},
	this.faint = function() {
		console.log(`${this.name} has fainted.`)
	},
	this.call = function() {
		console.log(`${trainer.name} sent out ${this.name}!`)
	}
	this.rivalCall = function() {
		console.log(`${trainer.friends.name} sent out ${this.name}!`)
	}
}

let mudflap = new Pokemon("Mudflap", 5);
let torchic = new Pokemon("Torchic", 10);
let treecko = new Pokemon("Treecko", 7);
let pikachu = new Pokemon("Pikachu", 11);

console.log("\n\n\n");
mudflap.call();
mudflap.tackle(torchic);
torchic.tackle(mudflap);
pikachu.call();
pikachu.tackle(torchic);


treecko.rivalCall();
treecko.tackle(pikachu);
pikachu.tackle(treecko);
console.log(`${trainer.name} has won the battle, ${trainer.friends.name} paid $50.`)






