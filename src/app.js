

const hamButton = document.getElementById('ham')
const navList = document.getElementById("nav-list")

function toggleButton() {
    navList.classList.toggle("show")
}

hamButton.addEventListener('click', toggleButton)