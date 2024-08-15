let navitems = document.getElementById("nav-items-id");
navitems.style.display = "none";

document.getElementById("icon-nav-id").addEventListener("click", function() {
    if (navitems.style.display =="none") {
    navitems.style.display = "flex";
    }
    else if (navitems.style.display=="flex"){
    navitems.style.display = "none";

    };
});