"use strict";

window.onload = function() {
    const board = document.querySelector("#board");
    
    for (var i = 0; i < board.children.length; i++) {
        var individualSquare = board.children[i];
        individualSquare.classList.add('square');
    }

    for (var i = 0; i < board.children.length; i++) {
        var individualSquare = board.children[i]
        individualSquare.addEventListener('click', X_or_O);
    }

    const options = [];
    let index = 0;
    const gameStatus = document.querySelector("#status");

    function X_or_O() {
        if (this.textContent == 0) {
            if (index % 2 == 0) {
                options.push("X");
                this.textContent = options[index];
                this.classList.add(options[index]);
         
            } else if (index % 2 == 1) {
                options.push("O");
                this.textContent = "O";
                this.classList.add(options[index]);
            } 
            index++;

            if (winnerCheck() === "X") {
                gameStatus.textContent = "Congratulations! X is the Winner!";
                gameStatus.classList.add('you-won');

            } else if (winnerCheck() === "O") {
                gameStatus.textContent = "Congratulations! O is the Winner!";
                gameStatus.classList.add('you-won');
            }
        }
    }

    for (var i = 0; i < board.children.length; i++) {
        var individualSquare = board.children[i]
        individualSquare.addEventListener('mouseover', mouseOver);
        individualSquare.addEventListener('mouseout', mouseOut);
    }

    function mouseOver() {
        this.classList.add("hover");
    }

    function mouseOut() {
        this.classList.remove("hover");
    }

    for (var i = 0; i < board.children.length; i++) {
        var individualSquare = board.children[i];
        individualSquare.setAttribute("id", i); 
    }

    function winnerCheck() {
        const id_0 = document.getElementById("0");
        const id_1 = document.getElementById("1");
        const id_2 = document.getElementById("2");
        const id_3 = document.getElementById("3");
        const id_4 = document.getElementById("4");
        const id_5 = document.getElementById("5");
        const id_6 = document.getElementById("6");
        const id_7 = document.getElementById("7");
        const id_8 = document.getElementById("8");

        if ((id_0.textContent == id_1.textContent) && (id_0.textContent == id_2.textContent) && (id_1.textContent == id_2.textContent)) {
            return id_0.textContent;
        } else if ((id_3.textContent == id_4.textContent) && (id_3.textContent == id_5.textContent) && (id_4.textContent == id_5.textContent)) {
            return id_3.textContent;
        } else if ((id_6.textContent == id_7.textContent) && (id_6.textContent == id_8.textContent) && (id_7.textContent == id_8.textContent)) {
            return id_6.textContent;
        } else if ((id_0.textContent == id_3.textContent) && (id_0.textContent == id_6.textContent) && (id_3.textContent == id_6.textContent)) {
            return id_0.textContent;
        } else if ((id_1.textContent == id_4.textContent) && (id_1.textContent == id_7.textContent) && (id_4.textContent == id_7.textContent)) {
            return id_1.textContent;
        } else if ((id_2.textContent == id_5.textContent) && (id_2.textContent == id_8.textContent) && (id_5.textContent == id_8.textContent)) {
            return id_2.textContent;
        } else if ((id_0.textContent == id_4.textContent) && (id_0.textContent == id_8.textContent) && (id_4.textContent == id_8.textContent)) {
            return id_0.textContent;
        } else if ((id_2.textContent == id_4.textContent) && (id_2.textContent == id_6.textContent) && (id_4.textContent == id_6.textContent)) {
            return id_2.textContent;   
        }
    }

    for (var i = 0; i < board.children.length; i++) {
        var allSquares = board.children[i]
        allSquares.addEventListener('click', resetButton);
    }

    const reset = document.querySelector(".btn");

    function resetButton() { 
        reset.addEventListener('click', e => {
            e.preventDefault();
            this.classList.remove("X");
            this.classList.remove("O");
            this.textContent = "";
            gameStatus.textContent = "Move your mouse over a square and click to play an X or an O.";
            gameStatus.classList.remove('you-won');
        });
    }
}