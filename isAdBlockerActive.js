// Check if an ad element is blocked or hidden
function isAdBlockerActive() {
  const adElement = document.createElement("div");
  adElement.innerHTML = "&nbsp;";
  adElement.className = "ad";
  adElement.style.width = "1px";
  adElement.style.height = "1px";
  adElement.style.position = "absolute";
  adElement.style.top = "-10px";
  adElement.style.left = "-10px";
  document.body.appendChild(adElement);

  const adBlockerActive =
    adElement.offsetParent === null || adElement.offsetHeight === 0;

  document.body.removeChild(adElement);

  return adBlockerActive;
}

// Check if ad blocker is active
if (isAdBlockerActive()) {
  console.log("Ad blocker is active");
} else {
  console.log("Ad blocker is not active");
}
