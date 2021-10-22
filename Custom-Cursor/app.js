let mouse = document.querySelector(".cursor")

let navLinks = document.querySelectorAll(".navLinks li")

window.addEventListener("mousemove", cursor)

function cursor(e) {
    mouse.style.top = e.pageY + "px"
    mouse.style.left = e.pageX + "px"
}

navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
        mouse.classList.add("scale")
        link.classList.add("hoverLink")
    })
    link.addEventListener("mouseleave", () => {
        mouse.classList.remove("scale")
        link.classList.remove("hoverLink")
    })
})