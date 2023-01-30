const searchIcon = document.querySelector('#search-icon');

const basketIcon = document.querySelector('#basket-icon')

const findProductBtn = document.querySelector('.header__content-button');

const searchMenu = document.querySelector('.searchMenu');

const basketMenu = document.querySelector('.basketMenu');

const closeSearchMenuIcon = document.querySelector('.closeSearchMenuIcon');

const closeBasketMenuIcon = document.querySelector('.closeBasketMenuIcon');

const burgerMenuIcon = document.querySelector('.mobileMenu__button');

const mobileMenu = document.querySelector('.mobileMenu');


function openSearchMenu() {
    searchMenu.classList.add('searchMenu_opened');
    searchMenu.classList.add('searchMenu_positionFixed');
};
function openBasketMenu() {
    basketMenu.classList.add('basketMenu_opened');
    basketMenu.classList.add('basketMenu_positionFixed');
};
function closeSearchMenu() {
    searchMenu.classList.remove('searchMenu_opened');
    searchMenu.classList.remove('searchMenu_positionFixed');
};

function closeBasketMenu() {
    basketMenu.classList.remove('basketMenu_opened');
    basketMenu.classList.remove('basketMenu_positionFixed');
};
function openBurgerMenu() {
    burgerMenuIcon.classList.toggle('mobileMenu__button_active');
    mobileMenu.classList.toggle('mobileMenu_isOpened');
};



// Открытие и закрытие меню поиска

searchIcon.addEventListener('click', () => {
    openSearchMenu();
});
findProductBtn.addEventListener('click', () => {
    if (basketMenu.classList.value === 'basketMenu basketMenu_opened basketMenu_positionFixed' ||
        mobileMenu.classList.value === 'mobileMenu mobileMenu_isOpened'
    ) {
    } else {
        openSearchMenu();
    }
   
});
closeSearchMenuIcon.addEventListener('click', () => {
    closeSearchMenu();
});

// Открытие и закрытие меню корзины

basketIcon.addEventListener('click', () => {
    if (mobileMenu.classList.value === 'mobileMenu mobileMenu_isOpened') {
        return
    } 
    openBasketMenu();
});
closeBasketMenuIcon.addEventListener('click', () => {
    closeBasketMenu();
})

// Открытие и закрытие мобильного меню

burgerMenuIcon.addEventListener('click', () => {
    if (basketMenu.classList.value === 'basketMenu basketMenu_opened basketMenu_positionFixed'

    ) {

    } else {
        openBurgerMenu();

    }
});

