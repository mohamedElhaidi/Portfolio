class SideMenu {
  bodyElement;
  sideMenuToggler;
  sideMenu;
  sideMenuListWrap;
  sideMenuListItems;

  constructor() {
    this.bodyElement = document.body;
    this.sideMenuToggler = document.getElementById("nav-menu-toggler");
    this.sideMenu = document.getElementById("nav-menu-list");
    this.sideMenuListWrap = this.sideMenu.getElementsByClassName(
      "nav-menu__list__wrap"
    )[0];
    this.sideMenuListItems = [...this.sideMenu.getElementsByTagName("li")];

    this.sideMenuListWrap.addEventListener("click", this.toggleSideMenuList);
    this.sideMenuToggler.addEventListener("click", this.toggleSideMenuList);
    this.sideMenuListItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        this.highlightListeItem(item);
        this.toggleSideMenuList();
      });
    });

    this.highlightListeItemById("front-page");
  }
  highlightListeItem = (item) => {
    this.sideMenuListItems.forEach((i) => i.classList.remove("selected"));
    item.classList.add("selected");
  };
  highlightListeItemById = (id) => {
    const listItemToHighlight = this.sideMenuListItems.find(
      (listItem) => listItem.dataset["id"] === id
    );
    // console.log(listItemToHighlight);
    if (listItemToHighlight) {
      this.sideMenuListItems.forEach((i) => i.classList.remove("selected"));
      listItemToHighlight.classList.add("selected");
    }
  };

  toggleSideMenuList = () => {
    if (this.sideMenu.classList.contains("toggle")) {
      this.closeSideMenuList();
      this.bodyElement.classList.remove("--noScroll");
      return;
    }
    this.openSideMenuList();
    this.bodyElement.classList.add("--noScroll");
  };

  openSideMenuList = () => {
    this.sideMenu.classList.add("toggle");
  };

  closeSideMenuList = () => {
    this.sideMenu.classList.remove("toggle");
  };
}

//init nav

const sideMenu = new SideMenu();

//hightlight the main or page section retrieved from url

let pageSectionId = window.location.hash;
if (pageSectionId) {
  pageSectionId = pageSectionId.replace("#", "");
  sideMenu.highlightListeItemById(pageSectionId);
}

//detect which page section is visible for the user
const pages = [...document.getElementsByClassName("page")];

let pageScroll = 0;

const checkVisiblePage = (e) => {
  // pages.forEach((page) => console.log(page.id, page.getClientRects()[0]));
  const windowHeight = window.innerHeight;

  let selectedPage = pages.reduce((prev, page) => {
    pageRect = page.getClientRects()[0];
    pageTop = pageRect.top;
    pageMargin = pageRect.top + pageRect.height;
    if (pageTop <= 100 && pageTop >= -100) return page;
    return prev;
  }, null);
  return selectedPage;
};

// initialise
document.addEventListener("scroll", (event) => {
  const page = checkVisiblePage();
  if (page) sideMenu.highlightListeItemById(page.id);
});
checkVisiblePage();
