export function tabSortedByDate(tab, asc = true) {
  const articlesSortedByDate = tab.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    if (asc) {
      return dateB - dateA; // Pour trier en ordre décroissant
    } else {
      return dateA - dateB;
    }
  });
  return articlesSortedByDate;
}

export function createCustomElement(tag, content) {
  const element = document.createElement(tag);
  element.innerText = content;
  return element;
}
