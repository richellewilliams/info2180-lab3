"use strict";

window.onload = function() {
    const board = document.querySelector("#board");
    
    for (var i = 0; i < board.children.length; i++) {
        var individualSquare = board.children[i];
        individualSquare.classList.add('square');
    }
}