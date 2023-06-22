function openPopup(name) {
    var element = document.getElementById("popup" + name)
    element.style.visibility = "visible"
    element.style.opacity = "1"
}

function closePopup(name) {
    var element = document.getElementById("popup" + name)
    element.style.visibility = "hidden"
    element.style.opacity = "0"
}