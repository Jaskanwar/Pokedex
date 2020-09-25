function getInput(){
    let input = document.getElementById("nameSearch");
    nameSearch(input)
}
function nameSearch(input) {
    // Declare variables
    let filter, ul, li, a, i, txtValue, display=[], count = 0;
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    // Loop through all list items, and match search
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 && count <5) {
            count++;
            display.push("\n"+li[i].getElementsByTagName("a")[0].innerText
                + " " + li[i].getElementsByTagName("c")[0].innerText
                + "\n" +li[i].getElementsByTagName("p")[0].innerText);
        }
    }
    alert(display)
}

function getNumInput(){
    let input = document.getElementById("numSearch");
    numSearch(input);
}

function numSearch(input) {
    // Declare variables
    let filter, ul, li, c, i, txtValue, display = [], count = 0;
    filter = input.value.toUpperCase()
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    // Loop through all list items, and match search
    for (i = 0; i < li.length; i++) {
        c = li[i].getElementsByTagName("c")[0];
        txtValue = c.textContent || c.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 && count < 5) {
            count++;
            display.push("\n"+li[i].getElementsByTagName("a")[0].innerText
                + " " + li[i].getElementsByTagName("c")[0].innerText
                + "\n" +li[i].getElementsByTagName("p")[0].innerText);
        }
    }
    alert(display);
}
