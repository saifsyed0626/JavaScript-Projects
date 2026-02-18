function Call_Loop() {
    var i = 1;
    var text = "";
    while (i < 11) {
        text += i + "<br>";
        i++;
    }
    document.getElementById("Loop").innerHTML = text;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$1100";
    const Musical_Instrument2 = {type:"piano", brand:"Fender", color:"black"};
    Musical_Instrument.color = "black";
    Musical_Instrument2.price = "$4100";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument2.type + " was " + Musical_Instrument2.price;
}


var X = 82;
document.write(X); 
{
    let X = 33;
    document.write("<br>" + X);
}

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();