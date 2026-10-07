function removeGoogleAI() {
  const selectors = [
    'div[data-attrid="wa:/description"]',
  ];

  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      element.remove();
    });
  });
}

window.addEventListener('DOMContentLoaded', removeGoogleAI);

const observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    if (mutation.addedNodes.length > 0) {
      removeGoogleAI();
      break;
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
