/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
        x.style.display = "none";
        var y = document.getElementById("body");
        y.style.overflow = "scroll";
    } else {
        x.style.display = "flex";
        var y = document.getElementById("body");
        y.style.overflow = "hidden";
    }
}
