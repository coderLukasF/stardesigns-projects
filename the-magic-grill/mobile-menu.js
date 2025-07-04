function toggleMobileNavBar() {
  const mobilelinks = document.querySelector(".mobile-links");

  if (mobilelinks) {
    if (mobilelinks.classList.contains("toggleMobileNavBar")) {
      // It's open, so close it
      mobilelinks.classList.remove("toggleMobileNavBar");
      mobilelinks.classList.add("disableMobileNavBar");
    } else {
      // It's closed, so open it
      mobilelinks.classList.remove("disableMobileNavBar");
      mobilelinks.classList.add("toggleMobileNavBar");
    }
  }
}
