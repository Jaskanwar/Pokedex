function createDiv(){
    let div1 = document.getElementById("div1");
    let div2 = document.createElement("div");
    let ul = document.createElement("ul");
    ul.id = "myDiv";

    div2.appendChild(ul);
    div1.appendChild(div2);
}

function nameSearch() {
    // Declare variables
    let input, filter, ul, li, a, i, txtValue, newDiv;
    input = document.getElementById("nameSearch"); //gets the user input
    filter = input.value.toUpperCase();//Converts input to uppercase
    ul = document.getElementById("myUL"); //Gets all elements within the UL
    li = ul.getElementsByTagName("li"); //Gets all the li elements within the UL
    newDiv = document.getElementById("myDiv")

    while (newDiv.firstChild) {
        newDiv.removeChild(newDiv.lastChild);
    }
    // Loop through all list items, and match search

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0]; //gets the name elements using the tag assigned for names
        txtValue = a.textContent || a.innerText; //gets the text inside the tag
        if (txtValue.toUpperCase().indexOf(filter) > -1 && filter.length >0) { //checks to see if the name inputted matches any in the pokedex and counts to 5
            let listItem = li[i].cloneNode(true);
            listItem.id = "searchList";
            newDiv.appendChild(listItem);
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

    while (newDiv.firstChild) {
        newDiv.removeChild(newDiv.lastChild);
    }

    // Loop through all list items, and match search
    for (i = 0; i < li.length; i++) {
        c = li[i].getElementsByTagName("c")[0]; //gets the name elements using the tag assigned for names
        txtValue = c.textContent || c.innerText; //gets the text inside the tag
        if (txtValue.toUpperCase().indexOf(filter) > -1 && filter.length >0) { //checks to see if the name inputted matches any in the pokedex and counts to 5
            let listItem = li[i].cloneNode(true);
            listItem.id = "searchList";
            newDiv.appendChild(listItem);
        }
    }
}
