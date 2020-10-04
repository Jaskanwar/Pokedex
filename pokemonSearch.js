function nameSearch() {
    // Declare variables
    let input, filter, ul, li, a, i, txtValue, newDiv;
    input = document.getElementById("nameSearch"); //gets the user input
    filter = input.value.toUpperCase();//Converts input to uppercase
    ul = document.getElementById("myUL"); //Gets all elements within the UL
    li = ul.getElementsByTagName("li"); //Gets all the li elements within the UL
    newDiv = document.getElementById("myDiv")

    //While loop runs well there is a child and deletes all the previous so newest results are displayed
    while (newDiv.firstChild) {
        newDiv.removeChild(newDiv.lastChild);
    }

    // Loop through all list items, and match search
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0]; //gets the name elements using the tag assigned for names
        txtValue = a.textContent || a.innerText; //gets the text inside the tag
        if (txtValue.toUpperCase().indexOf(filter) > -1 && filter.length >0) { //checks to see if the name inputted matches any in the pokedex and counts to 5
            let listItem = li[i].cloneNode(true); //clones the filtered search into new variable
            listItem.id = "searchList"; //sets the ID of the new variable
            newDiv.appendChild(listItem);//Creates a new list item in the unordered list
        }
    }
}

function numSearch() {
    // Declare variables
    let input, filter, ul, li, c, i, txtValue, newDiv;
    input = document.getElementById("numSearch"); //gets the user input
    filter = input.value.toUpperCase(); //Converts input to uppercase
    ul = document.getElementById("myUL"); //Gets all elements within the UL
    li = ul.getElementsByTagName("li"); //Gets all the li elements within the UL
    newDiv =document.getElementById("myDiv")

    //While loop runs well there is a child and deletes all the previous so newest results are displayed
    while (newDiv.firstChild) {
        newDiv.removeChild(newDiv.lastChild);
    }

    // Loop through all list items, and match search
    for (i = 0; i < li.length; i++) {
        c = li[i].getElementsByClassName("c")[0]; //gets the name elements using the tag assigned for names
        txtValue = c.textContent || c.innerText; //gets the text inside the tag
        if (txtValue.toUpperCase().indexOf(filter) > -1 && filter.length >0) { //checks to see if the name inputted matches any in the pokedex and counts to 5
            let listItem = li[i].cloneNode(true); //clones the filtered search into new variable
            listItem.id = "searchList"; //sets the ID of the new variable
            newDiv.appendChild(listItem); //Creates a new list item in the unordered list
        }
    }
}

function createDiv(){
    let div1 = document.getElementById("div1"); //get empty div
    let div2 = document.createElement("div"); //creates empty div
    let ul = document.createElement("ul");//creates unordered list
    ul.id = "myDiv"; //assigns ID for UL

    div2.appendChild(ul); //sets the ul as a child of the div
    div1.appendChild(div2);//creates a new empty div child
}
