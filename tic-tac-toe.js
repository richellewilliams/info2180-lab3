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

    function X_or_O() {
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
    }

    for (var i = 0; i < board.children.length; i++) {
        var individualSquare = board.children[i]
        individualSquare.addEventListener('mouseover', mouseOver);
        individualSquare.addEventListener('mouseout', mouseOut);
    }

    function mouseOver(){
        this.classList.add("hover");
    }

    function mouseOut(){
        this.classList.remove("hover");
    }
}