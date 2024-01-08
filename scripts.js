const menuBtn = document.querySelector("#menu-button");
menuBtn.addEventListener("click", () => {
  const menuItemList = document.querySelector("#menu-item-list");
  menuItemList.classList.toggle("hidden");
});

const mobileBtn = document.querySelector("#mobile-button");
mobileBtn.addEventListener("click", () => {
  const mobileMenu = document.querySelector("#mobile-menu");
  mobileMenu.classList.toggle("hidden");
});
