
/* In order to get information from your HTML Class, you first have to
   store the information in a variable */
let any_var = document.querySelectorAll("whatever class you're trying to get information from your HTML");


/* In order to access the information from your variable, you need to cycle through your information. 
   In this case, the function "forEach", will cycle through the stored variables. 
   If you console.log() the variable or the argument. It will show all the HTML 
   elements stored in the variable.*/

/* The code above adds an Event Listener for each argument that is pulled from the HTML elements.
    This is done through the function nested inside the "forEach", in which the function takes the argument, 
    adds the event, and assigns what the event should be. In this case the event is click, in which if the 
    HTML element is clicked, it will trigger the function that was grouped in the Event Listener.*/

any_var.forEach(function("argument in here should be the name of the class you gave to your html") {
    "argument".addEventListener("click", /* make a name your function */)
});

/* After listing the function you want grouped with the Event Listener, you need to declare your function so 
   it will know what to do.  */

function /*name of your function*/(e){
    e.currentTarget.textContent
    // OR
    e.Target.textContent

    /* The function above does a lot for the user, but first we need to understand what the function does.
       "e" - the "e" is for the element that is being referenced. Through the previous functions, what we're 
       doing with this function is getting the element that i being clicked on.
       "currentTarget" - This part can also be interchanged with target, but the result may vary on your  HTML 
       set up. This part of code targets whatever element is being clicked on.
       "textContent" - this part of the code lists out the content of the HTML element. This can also be used 
       to re-write the current content of the element. 
        */

    e.currentTarget.textContent = "some string"

    /* In order to rewrite the text content of an HTML element, we have to give it a new property. The above code
       assigns new code to the element clicked on. */

/* It's important to note that the above functions can be used for a number of things such as matching up contents
   to repurpose elements in order to change part of a webpage. Do note that the first function only outputs what is
   currently on the HTML file. The first function does not rewrite any code, but simply outputs it. */
}

document.getElementById("whatever name you gave to your ID").innerHTML
/*  This function can be used to get Elements by any ID that you gave them in your HTML in order to rewrite them 
    through Javascript*/

e.currentTarget.id 
/* The above function can be used to acquire the ID of an element clicked as long as it's properly set up with 
   an Event Listener. See function below*/

arguments.forEach(function(argument) {
    argument.addEventListener("click", function id(e) {
        id = e.currentTarget.id
    })
})

/* In the function above, we assume we have a list of elements that are being stored so we can acquire the id of 
    the element based on what was clicked. */

document.getElementsByClassName("whatever class you want").innerHTML
/* This function can be used to get Elements base don the class that you gave to an HTML element */

if ("condition") {
    // do code here
} else if ("condition") {
    // do different code here
} else{
    // do default code
}

/*  */