function removeAIElements() {
  const aiBlocks = document.querySelectorAll('div[data-attrid="wa:/description"], .ai-overview-container');
  aiBlocks.forEach(block => {
    block.remove();
  });
}

removeAIElements();
const observer = new MutationObserver(removeAIElements);
observer.observe(document.body, { childList: true, subtree: true });
