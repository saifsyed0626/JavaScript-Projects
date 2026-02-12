function my_Dictionary() {
    var Animal = {
        Species:"Bird",
        Color:"Green",
        Breed:"Parrot",
        Age:2,
        Sound:"Whistle!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function my_Dictionary() {
    var Person = {
        name:"Saif",
        age:20,
        name:"Joe"   // Duplicate key
    };
    document.getElementById("Dictionary").innerHTML = Person.name;
}

console.log(my_Dictionary);
console.log(my_Dictionary.name);

function my_Dictionary() {
    var Animal = {
        Species:"Bird",
        Color:"Green",
        Breed:"Parrot",
        Age:2,
        Sound:"Whistle!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}