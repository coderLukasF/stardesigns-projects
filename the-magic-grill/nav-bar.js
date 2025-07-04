function toggleMobileNavBar() {
  const mobilelinks = document.querySelector(".mobile-links");
  if (!mobilelinks) return;

  if (mobilelinks.classList.contains("toggleMobileNavBar")) {
    mobilelinks.classList.remove("toggleMobileNavBar");
    mobilelinks.classList.add("disableMobileNavBar");
  } else {
    mobilelinks.classList.remove("disableMobileNavBar");
    mobilelinks.classList.add("toggleMobileNavBar");
  }
}

function injectNavbarAndFixPadding() {
  fetch("./nav-bar.html")
    .then((response) => {
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
      return response.text();
    })
    .then((data) => {
      const navbarContainer = document.getElementById("navbar");
      if (!navbarContainer) {
        console.warn("Navbar container not found");
        return;
      }
      navbarContainer.innerHTML = data;
      waitForHeaderAndAdjustPadding();
    })
    .catch((error) => console.error("Error loading navbar:", error));
}

function waitForHeaderAndAdjustPadding() {
  const header = document.querySelector("header");
  const main = document.querySelector("main");

  if (header && main) {
    main.style.paddingTop = header.offsetHeight + "px";
  } else {
    setTimeout(waitForHeaderAndAdjustPadding, 50);
  }
}

document.addEventListener("DOMContentLoaded", injectNavbarAndFixPadding);
