let sideMenu = document.getElementById("sideMenu");

function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}

const blurDivs = document.querySelectorAll(".blur-load");
blurDivs.forEach((div) => {
  const img = div.querySelector("img");

  function loaded() {
    // show img
    div.classList.add("loaded");
  }

  if (img.complete) {
    loaded();
  } else {
    img.addEventListener("load", loaded);
  }
});
