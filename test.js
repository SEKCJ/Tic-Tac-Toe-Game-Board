let cells = document.querySelectorAll('.cell');
let result = false
var value = "X";
var id_array = ['','','','','','','','',''];
var count = 0;
document.getElementById("wrapper").style.height = "25em";
document.getElementById("tag").style.display = "none";
let btn = document.querySelector('button');
btn.addEventListener("click", function(){
    init()
}); 

cells.forEach(function(cell) {
    cell.addEventListener("click", cellClicked);
});

function cellClicked(e) {
    if (count !== 10){
    x = game_on(e);
    
    game = checkgame(x);
    switch (game) {
        case true:
            document.getElementById("tag").innerHTML = (`${prev_val} Wins!`);
            change_width()
            count = 10;
        case false:
            if (count == 9) {
                document.getElementById("tag").innerHTML = "DRAW!";
                change_width()
                count = 10;
            } else{
                null;
            }
    }
}
};

function game_on (e) {
    if (e.currentTarget.textContent == 0) {
        e.currentTarget.textContent = value;
        prev_val = value;
        if (value !== ""){
            count = count + 1;
            x = match_id(e, value);
        } else{
            count = count+0;
        }
        if (value == "X") {
            value = "O"
        } else{
            value = "X";
        }
    }
    return x
}

function match_id(e, x_o) {
    id = e.currentTarget.id
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
        

    } else{
        end_result = false;
    }
    return end_result;
} 


function init(){
    for (let i = 0; i < 9 ; i++) {
        document.getElementsByClassName("cell")[i].innerHTML = "";
    }
    document.getElementById("tag").innerHTML = "";
    id_array = ['','','','','','','','',''];
    value = "X";
    count = 0;
    document.getElementById("wrapper").style.height = "25em";
    document.getElementById("tag").style.display = "none";
}

function change_width() {
    document.getElementById("wrapper").style.height = "29em";
    document.getElementById("tag").style.display = "block";
}