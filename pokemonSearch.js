function nameSearch() {
    // Declare variables
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("nameSearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            [i].style.display = "none";
        }
    }
}

function numSearch() {
    // Declare variables
    let input, filter, ul, li, c, i, txtValue;
    input = document.getElementById("numSearch");
    filter = input.value.toUpperCase()
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        c = li[i].getElementsByTagName("c")[0];
        txtValue = c.textContent || c.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
