let tabElement = document.querySelectorAll(".Tabs");

const tabFactory = (element) => {
  const links = element.querySelectorAll('.Tabs__link');
  const items = element.querySelectorAll('.Tabs__item');

  element.addEventListener('click', (event) => {
    tabElement.updateActive(event.target.dataset.tab);
    event.stopPropagation();
  });

  links[0].classList.add('Tabs__link-selected');
  items[0].classList.add('Tabs__item-selected');

  return {
    element: element,
    links: links,
    items: items,
    activeLink: links[0],
    activeItem: items[0],
    updateActive: (index) => {
      if(index) {
        tabElement.activeLink.classList.remove('Tabs__link-selected');
        tabElement.activeItem.classList.remove('Tabs__item-selected');

        tabElement.links[index-1].classList.add('Tabs__link-selected');
        tabElement.items[index-1].classList.add('Tabs__item-selected');

        tabElement.activeLink = tabElement.links[index-1];
        tabElement.activeItem = tabElement.items[index-1];
      }
    }
  }
}

tabElement = tabFactory(tabElement[0]);
