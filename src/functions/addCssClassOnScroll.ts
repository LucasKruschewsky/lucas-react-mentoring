/**  Adds a CSS class (dynamicCssClass) 
into Element ClassList (ElementCssClasses)
when scroll position gets past scrollTrigger */

export const addCssClassOnScroll = (
  ElementCssClasses: DOMTokenList,
  dynamicCssClass: string,
  scrollTrigger: number
): void => {
  if (
    window.scrollY > scrollTrigger &&
    ElementCssClasses.contains(dynamicCssClass) === false
  ) {
    ElementCssClasses.add(dynamicCssClass);
  }

  if (
    window.scrollY <= scrollTrigger &&
    ElementCssClasses.contains(dynamicCssClass)
  ) {
    ElementCssClasses.remove(dynamicCssClass);
  }
};
