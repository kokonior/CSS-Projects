const pannels = document.querySelectorAll(".pannel");

pannels.forEach((pannel) => {
  pannel.addEventListener("click", (event) => {
    removePannelClass();
    pannel.classList.toggle("active");
  });
});

function removePannelClass() {
  pannels.forEach((pannel) => {
    pannel.classList.remove("active");
  });
}
