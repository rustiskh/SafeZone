window.addEventListener("DOMContentLoaded", () => {
    // Скрипт поисковой строки
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    const searchCategoriesSelect = document.querySelector('.search-categories-select');

    function sendSearchRequest() {
        const searchTerm = searchInput.value;
        const selectedCategory = searchCategoriesSelect.value;
    }

    searchButton.addEventListener('click', () => {
        sendSearchRequest();
        // выполнение поиска с использованием searchTerm и selectedCategory
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.code === "Enter") {
            sendSearchRequest();
        }
    });

    // Кастомный селект выбора категории в поисковой строке
    const categorySelects = document.querySelectorAll('.search-categories-select');

    categorySelects.forEach((categoriesSelect) => {
        const categoriesSelected = categoriesSelect.querySelector('.search-categories-selected');
        const categoriesList = categoriesSelect.querySelector('.search-categories-list');
        const categoriesItems = categoriesSelect.querySelectorAll('.search-categories-item');

        categoriesSelected.addEventListener('click', () => {
            categoriesSelect.classList.toggle('open');
        });

        categoriesItems.forEach((item) => {
            item.addEventListener('click', () => {
                const value = item.dataset.value;
                categoriesSelected.innerHTML = item.innerHTML;
                categoriesSelected.dataset.value = value;
                categoriesSelect.classList.remove('open');
            });
        });

        document.addEventListener('click', (e) => {
            if (!categoriesSelect.contains(e.target)) {
                categoriesSelect.classList.remove('open');
            }
        });

        const searchButton = categoriesSelect.nextElementSibling;

        searchButton.addEventListener('click', () => {
            const searchInput = categoriesSelect.previousElementSibling.querySelector('.search-input');
            const searchValue = searchInput.value.trim();
            const categoryValue = categoriesSelected.dataset.value;

            // Здесь можно написать код для отправки запроса на сервер
            console.log('Search:', searchValue, 'Category:', categoryValue);
        });
    });

    // Открытие поисковой строки в хедере на мобильном разрешении
    const searchMobOpener = document.querySelector('.header-main__search-mob-opener');
    const searchHeaderField = document.querySelector('.header-main__search .search-wrapper');
    console.log(searchMobOpener, searchHeaderField);

    searchMobOpener.addEventListener('click', () => {
        searchHeaderField.style.display = "flex";
        // searchMobOpener.style.display = "none";  
    })

    // Кнопка меню в хеддере и открытие меню + аккардеоны в меню
    const headerMenu = document.querySelector('.header-main__menu');
    const headerMenuWrapper = document.querySelector('.header-main__menu-wrapper');
    const headerMenuClose = document.querySelector('.header-main__menu-close');

    headerMenu.addEventListener('click', () => {
        headerMenuWrapper.classList.toggle('open');
        headerMenuClose.classList.remove('open');
    });

    headerMenuClose.addEventListener('click', () => {
        headerMenuWrapper.classList.remove('open');
    });

    // Создание и работа аккардеонов в меню на мобильном разрешении
    var menuBox = document.querySelectorAll(".header__nav-box");

    menuBox.forEach((item) => {
        if (window.innerWidth <= 768) {
            item.classList.remove('open');

            item.addEventListener("click", function () {
                item.classList.toggle("open");
            });
        }
    });

    // Скрипт переполнения категорий (аккунты, игры)
    const horScrollContainer = document.querySelectorAll('.hor-scroll-menu');

    horScrollContainer.forEach(elem => {
        const horScrollWrapper = elem.querySelector('.hor-scroll-menu__wrapper');
        const horScrollLeftArrow = elem.querySelector('.hor-scroll-menu__arrow_left');
        const horScrollRightArrow = elem.querySelector('.hor-scroll-menu__arrow_right');
        const horScrollCatalogLink = elem.querySelector('.hor-scroll-menu__link');


        if (horScrollWrapper.scrollWidth > horScrollWrapper.clientWidth) {
            console.log("Больше - выводим элементы");
            horScrollWrapper.style.marginLeft = "20px";
            horScrollWrapper.style.marginRight = "20px";
            horScrollWrapper.style.justifyContent = "flex-start";

        } else {
            console.log("Меньше - элементы скрыты");
            horScrollLeftArrow.style.display = "none";
            horScrollRightArrow.style.display = "none";
            horScrollCatalogLink.style.display = "none";
        }

        const horScrollMenuItems = elem.querySelectorAll('.hor-scroll-menu__item');
        let activeItem = horScrollMenuItems?.[0];

        let prevActiveItem = activeItem?.previousElementSibling;
        let nextActiveItem = activeItem?.nextElementSibling;
        activeItem?.classList?.add('hor-scroll-menu__item_active');

        const onChangeActiveItem = (element) => {
            if (activeItem) {
                activeItem.classList.remove('hor-scroll-menu__item_active');
            }
            activeItem = element;
            prevActiveItem = element.previousElementSibling;
            nextActiveItem = element.nextElementSibling;
            element.classList.add('hor-scroll-menu__item_active');
            element.scrollIntoView({ behavior: "smooth" })

        }

        horScrollLeftArrow.addEventListener('click', () => {
            if (prevActiveItem) {
                onChangeActiveItem(prevActiveItem)
            }
        })

        horScrollRightArrow.addEventListener('click', () => {
            if (nextActiveItem) {
                onChangeActiveItem(nextActiveItem)
            }
        })

        horScrollMenuItems.forEach(element => {
            element.addEventListener('click', ({ currentTarget }) => {
                onChangeActiveItem(currentTarget);
            })
        });
    })


    // Кастомные селекты секций (Игры, Каталог)
    const selects = document.querySelectorAll('.select');

    selects.forEach((select) => {
        const categoriesSelected = select.querySelector('.selected');
        const categoriesList = select.querySelector('.list');
        const categoriesItems = select.querySelectorAll('.item');

        categoriesSelected.addEventListener('click', () => {
            select.classList.toggle('open');
        });

        categoriesItems.forEach((item) => {
            item.addEventListener('click', () => {
                const value = item.dataset.value;
                categoriesSelected.innerHTML = item.innerHTML;
                categoriesSelected.dataset.value = value;
                select.classList.remove('open');

            });
        });

        document.addEventListener('click', (e) => {
            if (!select.contains(e.target)) {
                select.classList.remove('open');
            }
        });
    });


    // Скрипт блока faq
    const faqItems = document.querySelectorAll(".faq__item");

    faqItems.forEach((faqItem) => {
        faqItem.addEventListener("click", function () {
            faqItem.classList.toggle("open");
        });
    });


    // Переключение цветовой темы
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    const lightSwitch = document.querySelectorAll('.header-main__color-theme-dark');
    const darkSwitch = document.querySelectorAll('.header-main__color-theme-light');

    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.body.className = themeName;
    }

    lightSwitch.forEach((item) => {
        item.addEventListener('click', () => {
            setTheme('light')
        })
    });

    darkSwitch.forEach((item) => {
        item.addEventListener('click', () => {
            setTheme('dark')
        })
    });
});