const header = document.querySelector(".site-header");
const menu = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
const compactHeader = window.matchMedia("(max-width: 47rem)");

function setMenu(expanded) {
  menu.setAttribute("aria-expanded", String(expanded));
  navigation.hidden = compactHeader.matches && !expanded;
}

function syncMenu() {
  const focusWasInNavigation = navigation.contains(document.activeElement);
  const focusWasOnMenu = document.activeElement === menu;

  menu.hidden = !compactHeader.matches;
  setMenu(false);

  if (compactHeader.matches && focusWasInNavigation) {
    menu.focus();
  }

  if (!compactHeader.matches && focusWasOnMenu) {
    navigation.querySelector("a").focus();
  }
}

menu.addEventListener("click", () => {
  setMenu(menu.getAttribute("aria-expanded") === "false");
});

navigation.addEventListener("click", (event) => {
  if (compactHeader.matches && event.target.closest("a")) {
    setMenu(false);
  }
});

header.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    menu.focus();
  }
});

compactHeader.addEventListener("change", syncMenu);
header.classList.add("has-menu");
syncMenu();
