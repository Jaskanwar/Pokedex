function getInput(){
    let input = document.getElementById("nameSearch"); //gets the user input
    nameSearch(input)
}
function nameSearch(input) {
    // Declare variables
    let filter, ul, li, a, i, txtValue, display=[], count = 0;
    filter = input.value.toUpperCase();//Converts input to uppercase
    ul = document.getElementById("myUL"); //Gets all elements within the UL
    li = ul.getElementsByTagName("li"); //Gets all the li elements within the UL

    // Loop through all list items, and match search
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0]; //gets the name elements using the tag assigned for names
        txtValue = a.textContent || a.innerText; //gets the text inside the tag
        if (txtValue.toUpperCase().indexOf(filter) > -1 && count <5) { //checks to see if the name inputted matches any in the pokedex and counts to 5
            count++; //count increases so the search can not exceed 5 results
            display.push("\n"+li[i].getElementsByTagName("a")[0].innerText
                + " " + li[i].getElementsByTagName("c")[0].innerText
                + "\n" +li[i].getElementsByTagName("p")[0].innerText); //displays info in alert box
        }
    }
    alert(display)
}

function getNumInput(){
    let input = document.getElementById("numSearch"); //gets the user input
    numSearch(input);
}

function numSearch(input) {
    // Declare variables
    let filter, ul, li, c, i, txtValue, display = [], count = 0;
    filter = input.value.toUpperCase(); //Converts input to uppercase
    ul = document.getElementById("myUL"); //Gets all elements within the UL
    li = ul.getElementsByTagName("li"); //Gets all the li elements within the UL

    // Loop through all list items, and match search
    for (i = 0; i < li.length; i++) {
        c = li[i].getElementsByTagName("c")[0]; //gets the name elements using the tag assigned for names
        txtValue = c.textContent || c.innerText; //gets the text inside the tag
        if (txtValue.toUpperCase().indexOf(filter) > -1 && count < 5) { //checks to see if the name inputted matches any in the pokedex and counts to 5
            count++; //count increases so the search can not exceed 5 results
            display.push("\n"+li[i].getElementsByTagName("a")[0].innerText
                + " " + li[i].getElementsByTagName("c")[0].innerText
                + "\n" +li[i].getElementsByTagName("p")[0].innerText); //displays info in alert box
        }
    }
    alert(display);
}
