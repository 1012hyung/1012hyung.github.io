const year = document.querySelector("#current-year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

function scrollToCurrentHash() {
  if (!window.location.hash) {
    return;
  }

  const target = document.querySelector(window.location.hash);

  if (target) {
    target.scrollIntoView({ block: "start" });
  }
}

window.addEventListener("load", () => {
  window.setTimeout(scrollToCurrentHash, 80);
});

window.addEventListener("hashchange", scrollToCurrentHash);
