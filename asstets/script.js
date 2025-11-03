// sidebar toggle variables
const menuToggler = document.querySelector('.menu-toggler');
const sideBar = document.querySelector('.side-bar');

// page navigation variables
const navItemLinks = document.querySelectorAll('.nav li a');
const pages = document.querySelectorAll('.page');


// variables for filtering
const filterBtn = document.querySelectorAll('.filter-item');
let itemCategory; // assigned after dynamic render

// dynamic portfolio data
const portfolioItemsData = [
  {
    img: './asstets/images/1.jpg',
    name: 'Kambaii Fitness',
    icon: 'volume-high',
    category: 'SoundCloud',
    android: 'https://play.google.com/store/apps/details?id=com.kambaii.fitness',
    ios: 'https://apps.apple.com/us/app/kambaii-fitness/id6745445260'
  },
  {
    img: './asstets/images/2.jpg',
    name: 'Media Project 1',
    icon: 'film',
    category: 'Media',
    android: '#',
    ios: '#'
  },
  {
    img: './asstets/images/3.jpg',
    name: 'Vimeo Video 1',
    icon: 'videocam',
    category: 'Vimeo Videos',
    android: '#',
    ios: '#'
  },
  {
    img: './asstets/images/4.jpg',
    name: 'Media Projct 2',
    icon: 'film',
    category: 'Media',
    android: '#',
    ios: '#'
  },
  {
    img: './asstets/images/5.jpg',
    name: 'Mockup Design 1',
    icon: 'image',
    category: 'Mockups',
    android: '#',
    ios: '#'
  },
  {
    img: './asstets/images/6.jpg',
    name: 'YouTube Video 1',
    icon: 'videocam',
    category: 'YouTube Videos',
    android: '#',
    ios: '#'
  }
];

function renderPortfolio(items) {
  const group = document.querySelector('.portfolio-items-group');
  if (!group) return;
  group.innerHTML = '';
  items.forEach(function (it) {
    const item = document.createElement('div');
    item.className = 'portfolio-item active';
    if (it.android) item.setAttribute('data-android', it.android);
    if (it.ios) item.setAttribute('data-ios', it.ios);

    const img = document.createElement('img');
    img.className = 'item-img';
    img.src = it.img;
    img.alt = it.name || '';

    const title = document.createElement('h4');
    title.className = 'item-name';
    title.textContent = it.name;

    const iconBox = document.createElement('div');
    iconBox.className = 'item-icon';
    const icon = document.createElement('ion-icon');
    icon.setAttribute('name', it.icon);
    iconBox.appendChild(icon);

    const category = document.createElement('div');
    category.className = 'item-category';
    category.textContent = it.category;

    const overlay = document.createElement('div');
    overlay.className = 'store-overlay';
    const aAndroid = document.createElement('a');
    aAndroid.className = 'store-link';
    aAndroid.setAttribute('data-store', 'android');
    aAndroid.href = it.android || '#';
    aAndroid.target = '_blank';
    aAndroid.rel = 'noopener noreferrer';
    aAndroid.setAttribute('aria-label', 'Get it on Google Play');
    const androidIcon = document.createElement('ion-icon');
    androidIcon.setAttribute('name', 'logo-google-playstore');
    aAndroid.appendChild(androidIcon);

    const aIos = document.createElement('a');
    aIos.className = 'store-link';
    aIos.setAttribute('data-store', 'ios');
    aIos.href = it.ios || '#';
    aIos.target = '_blank';
    aIos.rel = 'noopener noreferrer';
    aIos.setAttribute('aria-label', 'Download on the App Store');
    const iosIcon = document.createElement('ion-icon');
    iosIcon.setAttribute('name', 'logo-apple');
    aIos.appendChild(iosIcon);

    overlay.appendChild(aAndroid);
    overlay.appendChild(aIos);

    item.appendChild(img);
    item.appendChild(title);
    item.appendChild(iconBox);
    item.appendChild(category);
    item.appendChild(overlay);

    group.appendChild(item);
  });
}

// initial render
renderPortfolio(portfolioItemsData);
// capture categories after render for filtering
itemCategory = document.querySelectorAll('.item-category');

// toggling sidebar in mobile
menuToggler.addEventListener('click', function () {
  sideBar.classList.toggle('active');
});


// page navigation functionality

for (let i = 0; i < navItemLinks.length; i++) {
  // added onclick event in nav links
  navItemLinks[i].addEventListener('click', function () {

    // collected nav links innertext
    const itemLinkText = this.textContent.toLowerCase();

    // defined page and add active class 
    for (let i = 0; i < pages.length; i++) {

      // defining page condition
      if (pages[i].classList.contains(itemLinkText)) {
        // add active class on current page
        pages[i].classList.add('active');
        // add active class on clicked nav link
        navItemLinks[i].classList.add('active');
      } else {
        // remove active class from other pages
        pages[i].classList.remove('active');
        // remove active class from other nav links
        navItemLinks[i].classList.remove('active');
      }

    }

  });
}

// added eventListener in filter buttons
for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener('click', function () {

    // remove all active class from filter button
    for (let i = 0; i < filterBtn.length; i++) {
      filterBtn[i].classList.remove('active');
    }
    // added active class on filter button clicked
    this.classList.add('active');

    // show item, based on filter button click
    for (let i = 0; i < itemCategory.length; i++) {
      const itemCategoryText = itemCategory[i].textContent;
      console.log(itemCategoryText);
      switch (this.textContent) {
        case itemCategoryText:
          itemCategory[i].parentElement.classList.add('active');
          break;
        case 'All':
          itemCategory[i].parentElement.classList.add('active');
          break;
        default:
          itemCategory[i].parentElement.classList.remove('active');
      }
    }
  });
}
// (No extra mapping needed: hrefs set during render)
