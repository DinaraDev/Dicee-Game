var output = [];

function winDecider(player) {
    if (player[0] > player[1]) {
        document.querySelector(".heading-logo").innerHTML = "Player 1 wins!";
    }
    else if (player[0] < player[1]) {
        document.querySelector(".heading-logo").innerHTML = "Player 2 wins!";
    }
    else {
        document.querySelector(".heading-logo").innerHTML = "Draw!";
    }
};

function diceRoll() {
    for (var i = 1; i <= 2; i++) {
        var roll = Math.floor((Math.random() * 6) + 1);
        output.push(roll);
        document.querySelector("#player" + i).setAttribute("src", "./images/dice" + roll + ".png");
    }
    return output;
};

diceRoll();
winDecider(output);