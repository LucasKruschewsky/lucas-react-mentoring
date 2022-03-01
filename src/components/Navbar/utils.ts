export const handleNavbarBackground = (
  NavContainerClasses: DOMTokenList
): void => {
  if (
    window.scrollY > 0 &&
    NavContainerClasses.contains('navbarBackground') === false
  ) {
    NavContainerClasses.add('navbarBackground');
  }

  if (
    window.scrollY === 0 &&
    NavContainerClasses.contains('navbarBackground')
  ) {
    NavContainerClasses.remove('navbarBackground');
  }
};
