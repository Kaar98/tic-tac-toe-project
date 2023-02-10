let pl1 = prompt("Which one you choose X or O?", "X Or O");
// let pl1="X";
let pl2;
if (pl1 == "X") {
    pl2 = "O";
    pl1 = "X";
} else {
    pl1 = "O";
    pl2 = "X";
}
let audioelement = new Audio();
let whostarts = pl1;
let i1 = document.getElementById('i1');
let i2 = document.getElementById('i2');
let i3 = document.getElementById('i3');
let i4 = document.getElementById('i4');
let i5 = document.getElementById('i5');
let i6 = document.getElementById('i6');
let i7 = document.getElementById('i7');
let i8 = document.getElementById('i8');
let i9 = document.getElementById('i9');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let winner = document.getElementById('winner');
let winninggif = document.getElementById('gif');
let wv=0;
one.addEventListener('click', () => {
    let fill1 = 0;
    if (i1.src.match("cross") || i1.src.match("circle")) {
        fill1 = 1;
    }
    if (fill1 == 0 &&wv!=1) {
        if (whostarts == pl1) {
            if (pl1 == "X") {
                i1.src = 'images/cross.jpeg';
                i1.style.display = 'block';
                if (i2.src.match("cross") && i3.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i4.src.match("cross") && i7.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i5.src.match("cross") && i9.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i1.src = 'images/circle.jpeg';
                i1.style.display = 'block';
                if (i2.src.match("circle") && i3.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i4.src.match("circle") && i7.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i5.src.match("circle") && i9.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();
            whostarts = pl2;
        } else {
            if (pl2 == "X") {
                i1.src = 'images/cross.jpeg';
                i1.style.display = 'block';
                if (i2.src.match("cross") && i3.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i4.src.match("cross") && i7.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i5.src.match("cross") && i9.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i1.src = 'images/circle.jpeg';
                i1.style.display = 'block';
                if (i2.src.match("circle") && i3.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i4.src.match("circle") && i7.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i5.src.match("circle") && i9.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();
            whostarts = pl1;
        }
    }
})
two.addEventListener('click', () => {
    let fill1 = 0;
    if (i2.src.match("cross") || i2.src.match("circle")) {
        fill1 = 1;
    }
    if (fill1 == 0 &&wv!=1) {
        if (whostarts == pl1) {
            if (pl1 == "X") {
                i2.src = 'images/cross.jpeg';
                i2.style.display = 'block';
                if (i1.src.match("cross") && i3.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i5.src.match("cross") && i8.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i2.src = 'images/circle.jpeg';
                i2.style.display = 'block';
                if (i1.src.match("circle") && i3.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i5.src.match("circle") && i8.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();
            whostarts = pl2;
        } else {
            if (pl2 == "X") {
                i2.src = 'images/cross.jpeg';
                i2.style.display = 'block';
                if (i1.src.match("cross") && i3.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i5.src.match("cross") && i8.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i2.src = 'images/circle.jpeg';
                i2.style.display = 'block';
                if (i1.src.match("circle") && i3.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i5.src.match("circle") && i8.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();
            whostarts = pl1;
        }
    }
})
three.addEventListener('click', () => {
    let fill1 = 0;
    if (i3.src.match("cross") || i3.src.match("circle")) {
        fill1 = 1;
    }
    if (fill1 == 0 &&wv!=1) {
        if (whostarts == pl1) {
            if (pl1 == "X") {
                i3.src = 'images/cross.jpeg';
                i3.style.display = 'block';
                if (i2.src.match("cross") && i1.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i6.src.match("cross") && i9.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i5.src.match("cross") && i7.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i3.src = 'images/circle.jpeg';
                i3.style.display = 'block';
                if (i2.src.match("circle") && i1.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i6.src.match("circle") && i9.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i5.src.match("circle") && i7.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();
            whostarts = pl2;
        } else {
            if (pl2 == "X") {
                i3.src = 'images/cross.jpeg';
                i3.style.display = 'block';
                if (i2.src.match("cross") && i1.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i6.src.match("cross") && i9.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i5.src.match("cross") && i7.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i3.src = 'images/circle.jpeg';
                i3.style.display = 'block';
                if (i2.src.match("circle") && i1.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i6.src.match("circle") && i9.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i5.src.match("circle") && i7.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();
            whostarts = pl1;
        }
    }
})
four.addEventListener('click', () => {
    let fill1 = 0;
    if (i4.src.match("cross") || i4.src.match("circle")) {
        fill1 = 1;
    }
    if (fill1 == 0&&wv!=1) {
        if (whostarts == pl1) {
            if (pl1 == "X") {
                i4.src = 'images/cross.jpeg';
                i4.style.display = 'block';
                if (i5.src.match("cross") && i6.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i1.src.match("cross") && i7.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i4.src = 'images/circle.jpeg';
                i4.style.display = 'block';
                if (i1.src.match("circle") && i7.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i5.src.match("circle") && i6.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();
            whostarts = pl2;
        } else {
            if (pl2 == "X") {
                i4.src = 'images/cross.jpeg';
                i4.style.display = 'block';
                if (i1.src.match("cross") && i3.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i5.src.match("cross") && i8.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i4.src = 'images/circle.jpeg';
                i4.style.display = 'block';
                if (i1.src.match("cross") && i7.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i5.src.match("cross") && i6.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();
            whostarts = pl1;
        }
    }
})
five.addEventListener('click', () => {
    let fill1 = 0;
    if (i5.src.match("cross") || i5.src.match("circle")) {
        fill1 = 1;
    }
    if (fill1 == 0 &&wv!=1) {
        if (whostarts == pl1) {
            if (pl1 == "X") {
                i5.src = 'images/cross.jpeg';
                i5.style.display = 'block';
                if (i1.src.match("cross") && i9.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i4.src.match("cross") && i6.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i2.src.match("cross") && i8.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    winninggif.style.display = 'block';
                } else if (i3.src.match("cross") && i7.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i5.src = 'images/circle.jpeg';
                i5.style.display = 'block';
                if (i1.src.match("circle") && i9.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i4.src.match("circle") && i6.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i3.src.match("circle") && i7.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i2.src.match("circle") && i8.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            whostarts = pl2;
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();
        } else {
            if (pl2 == "X") {
                i5.src = 'images/cross.jpeg';
                i5.style.display = 'block';
                if (i1.src.match("cross") && i9.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i4.src.match("cross") && i6.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i2.src.match("cross") && i8.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i3.src.match("cross") && i7.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i5.src = 'images/circle.jpeg';
                i5.style.display = 'block';
                if (i1.src.match("circle") && i9.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i4.src.match("circle") && i6.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i3.src.match("circle") && i7.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i2.src.match("circle") && i8.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            whostarts = pl1;
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();
        }
    }
})
six.addEventListener('click', () => {
    let fill1 = 0;
    if (i6.src.match("cross") || i6.src.match("circle")) {
        fill1 = 1;
    }
    if (fill1 == 0 && wv!=1) {
        if (whostarts == pl1) {
            if (pl1 == "X") {
                i6.src = 'images/cross.jpeg';
                i6.style.display = 'block';
                if (i5.src.match("cross") && i4.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i3.src.match("cross") && i9.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i6.src = 'images/circle.jpeg';
                i6.style.display = 'block';
                if (i5.src.match("circle") && i4.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i3.src.match("circle") && i9.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            whostarts = pl2;
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();

        } else {
            if (pl2 == "X") {
                i6.src = 'images/cross.jpeg';
                i6.style.display = 'block';
                if (i5.src.match("cross") && i4.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i3.src.match("cross") && i9.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i6.src = 'images/circle.jpeg';
                i6.style.display = 'block';
                if (i5.src.match("circle") && i4.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i3.src.match("circle") && i9.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            whostarts = pl1;
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();
        }
    }
})
seven.addEventListener('click', () => {
    let fill1 = 0;
    if (i7.src.match("cross") || i7.src.match("circle")) {
        fill1 = 1;
    }
    if (fill1 == 0 && wv!=1) {
        if (whostarts == pl1) {
            if (pl1 == "X") {
                i7.src = 'images/cross.jpeg';
                i7.style.display = 'block';
                if (i1.src.match("cross") && i4.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i3.src.match("cross") && i5.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i8.src.match("cross") && i9.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i7.src = 'images/circle.jpeg';
                i7.style.display = 'block';
                if (i1.src.match("circle") && i4.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i3.src.match("circle") && i5.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i8.src.match("circle") && i9.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();
            whostarts = pl2;
        } else {
            if (pl2 == "X") {
                i7.src = 'images/cross.jpeg';
                i7.style.display = 'block';
                if (i1.src.match("cross") && i4.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i3.src.match("cross") && i5.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i8.src.match("cross") && i9.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i7.src = 'images/circle.jpeg';
                i7.style.display = 'block';
                if (i5.src.match("circle") && i3.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i4.src.match("circle") && i1.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i8.src.match("circle") && i9.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();
            whostarts = pl1;
        }
    }
})
eight.addEventListener('click', () => {
    let fill1 = 0;
    if (i8.src.match("cross") || i8.src.match("circle")) {
        fill1 = 1;
    }
    if (fill1 == 0&&wv!=1) {
        if (whostarts == pl1) {
            if (pl1 == "X") {
                i8.src = 'images/cross.jpeg';
                i8.style.display = 'block';
                if (i2.src.match("cross") && i5.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i7.src.match("cross") && i9.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i8.src = 'images/circle.jpeg';
                i8.style.display = 'block';
                if (i2.src.match("circle") && i5.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i7.src.match("circle") && i9.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            whostarts = pl2;
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();
        } else {
            if (pl2 == "X") {
                i8.src = 'images/cross.jpeg';
                i8.style.display = 'block';
                if (i2.src.match("cross") && i5.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i7.src.match("cross") && i9.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i8.src = 'images/circle.jpeg';
                i8.style.display = 'block';
                if (i2.src.match("circle") && i5.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i7.src.match("circle") && i9.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            whostarts = pl1;
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();
        }
    }
})
nine.addEventListener('click', () => {
    let fill1 = 0;
    if (i9.src.match("cross") || i9.src.match("circle")) {
        fill1 = 1;
    }
    if (fill1 == 0&&wv!=1) {
        if (whostarts == pl1) {
            if (pl1 == "X") {
                i9.src = 'images/cross.jpeg';
                i9.style.display = 'block';
                if (i3.src.match("cross") && i6.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i7.src.match("cross") && i8.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i1.src.match("cross") && i5.src.match("cross")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i9.src = 'images/circle.jpeg';
                i9.style.display = 'block';
                if (i3.src.match("circle") && i6.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i7.src.match("circle") && i8.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i1.src.match("circle") && i5.src.match("circle")) {
                    winner.innerHTML = "Player1 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            whostarts = pl2;
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();
        } else {
            if (pl2 == "X") {
                i9.src = 'images/cross.jpeg';
                i9.style.display = 'block';
                if (i3.src.match("cross") && i6.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i7.src.match("cross") && i8.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i1.src.match("cross") && i5.src.match("cross")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            } else {
                i9.src = 'images/circle.jpeg';
                i9.style.display = 'block';
                if (i3.src.match("circle") && i6.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i7.src.match("circle") && i8.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                } else if (i1.src.match("circle") && i5.src.match("circle")) {
                    winner.innerHTML = "Player2 Wins!";
                    wv=1;
                    winninggif.style.display = 'block';
                }
            }
            whostarts = pl1;
            audioelement.src = 'sound/ting.mp3';
            audioelement.play();
        }
    }
})
let reset=document.getElementById("reset");
reset.addEventListener('click',()=>{
    location.reload();
})
