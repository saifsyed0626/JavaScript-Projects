var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2() {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function get_age() {
    if (new Date().getFullYear() - 2000 > 18) {
        document.getElementById("Greeting").innerHTML = "You are old enough to vote!";
    }
}

function get_height() {
    var height = document.getElementById("height").value;
    if (height >= 150) {
        Ride = "You are tall enough to ride the roller coaster!";
        document.getElementById("How_tall_are_you?").innerHTML = "You are tall enough to ride the roller coaster!";
    } else {
        document.getElementById("How_tall_are_you?").innerHTML = "You are not tall enough to ride the roller coaster.";
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 == Time < 18) {
        Reply = "It is the afternoon.";
    } else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}