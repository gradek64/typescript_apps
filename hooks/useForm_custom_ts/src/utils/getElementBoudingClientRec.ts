const getElementBoundingClientRec = (elements: Element[]) => {
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return elements.map((el) => {
    const rect = el.getBoundingClientRect();
    return { topPos: rect.top + scrollTop, leftPos: rect.left + scrollLeft };
  });
};

export { getElementBoundingClientRec };
