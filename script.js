document.getElementById("Saludo").addEventListener("click", function() {
    alert("Hola! Soy el div");
});

document.querySelector("#Saludo button").addEventListener("click", function(event) {
    event.stopPropagation();
    alert("HOLA!");
});