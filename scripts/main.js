const nodeButtons = document.querySelectorAll("button");
const buttons = Array.from(nodeButtons);
const logo = document.getElementById("logo");

var lastPart = location.href.split("/").pop().replace(".html", "");
document.title = lastPart[0].toUpperCase() + lastPart.slice(1);

buttons.forEach(button => {
    button.addEventListener("click", function() {
        if(location.href.indexOf("subjects") > -1) {
            location.href = "../" + button.id + ".html";
        } else {
            location.href = button.id + ".html";
        }
    });
});

logo.addEventListener("click", function() {
    if(location.href.indexOf("subjects") > -1) {
        location.href = "../index.html";
    } else {
        location.href = "index.html";
    }
});