const params = new URLSearchParams(window.location.search);
const scroll = params.get("scroll");

if (scroll === "1") {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const target = document.getElementById("third-div");
      if (target) {
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 50); // Delay to ensure full layout
  });
}

if (scroll === "2") {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const target = document.getElementById("container");
      if (target) {
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 50); // Small delay to ensure layout is finalized
  });
}
