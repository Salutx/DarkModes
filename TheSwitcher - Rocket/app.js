const togglerButton = document.getElementById('toggler')
const circleButton = document.getElementById("circle")
const body = document.querySelector ('body')

togglerButton.onclick = function() {
    body.classList.toggle('darkMode')
    circleButton.classList.toggle('switcher--toggled');
}