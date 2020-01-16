let cells = document.querySelectorAll('.cell');
let result = false
var value = "X";
var id_array = ['','','','','','','','',''];
var end_result = "";
var first = "";
var second = "";
var count = 0;
let start_over = document.querySelectorAll('.row');

/* Ashes.forEach(function(start_over) {
    start_over.addEventListener("click",init);
}) */


cells.forEach(function(cell) {
    cell.addEventListener("click", cellClicked);
});

function cellClicked(e) {
    x = game_on(e);
    count = count + 1;
/* if (e.target.textContent) == 0{
    e.target.textContent = value;
    if (value == "X") {
        value = "O"
    } else{
        value = "X";
    }
} */

    e.currentTarget.removeEventListener(e.type, arguments.callee);
    game = checkgame(x);

    if (count%2 == 0){
        set_val = "O"
    } else{
        set_val = "X"
    }
    switch (game) {
        case true:
            document.getElementById("tag").innerHTML = (`${set_val} Wins!`);
        case false:
            if (count == 9){
                alert("Tie")
            } else{
                null;
            }
    }
};

function game_on (e) {
    e.currentTarget.textContent = value;
    x = match_id(e, value);
    prev_val = value;
    switch (value) {
        case "X":
            value = "O";
            break;
        case "O":
            value = "X";
            break;
    };
    return x
}

function match_id(e, x_o) {
    id = e.currentTarget.id
    console.log(id)
    switch (parseInt(id, 10)) {
        case 1:
            id_array[0] = x_o;
            break;
        case 2:
            id_array[1] = x_o;
            break;
        case 3: 
            id_array[2] = x_o;
            break;
        case 4:
            id_array[3] = x_o;
            break;
        case 5:
            id_array[4] = x_o;
            break;
        case 6:
            id_array[5] = x_o;
            break;
        case 7:
            id_array[6] = x_o;
            break;
        case 8:
            id_array[7] = x_o;
            break;
        case 9:
            id_array[8] = x_o;
            break;
    }
    console.log(id_array);
    return id_array
    
}


function checkrow(a, b, c) {
    result = false;
    if (a==b && b==c) {
        if (a !== '' || b !== '' || c !== '') {
            result = true;
        } else {
            result = false;
        }
    }
    return result
}

function checkgame(combination) {
    if(
    (
    checkrow(combination[0], combination[1], combination[2]) == true ||
    checkrow(combination[3], combination[4], combination[5]) == true ||
    checkrow(combination[6], combination[7], combination[8]) == true ||
    checkrow(combination[0], combination[3], combination[6]) == true ||
    checkrow(combination[1], combination[4], combination[7]) == true ||
    checkrow(combination[2], combination[5], combination[8]) == true ||
    checkrow(combination[0], combination[4], combination[8]) == true ||
    checkrow(combination[2], combination[4], combination[6]) == true
    )) {
        end_result = true;
        
        console.log(end_result);
    } else{
        end_result = false;
        console.log(end_result)
    }
    return end_result;
} 


function init(){
    document.getElementById("tag").innerHTML = "";
}

