function removeAIElements() {
  // Exemple fictif de sélecteur pour Google AI Overviews (à adapter selon les mises à jour du DOM)
  const aiBlocks = document.querySelectorAll('div[data-attrid="wa:/description"], .ai-overview-container');
  aiBlocks.forEach(block => {
    block.remove(); // Ou block.style.display = 'none';
  });
}

// Exécution au chargement et observation des modifications dynamiques (Ajax)
removeAIElements();
const observer = new MutationObserver(removeAIElements);
observer.observe(document.body, { childList: true, subtree: true });
