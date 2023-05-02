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

    searchMobOpener.addEventListener('click', () => {
        searchHeaderField.style.display = "flex";
    })

    // Кнопка меню в хеддере и открытие меню + аккардеоны в меню
    const headerMenu = document.querySelector('.header-main__menu');
    const headerMenuWrapper = document.querySelector('.header-main__menu-wrapper');
    const headerMenuClose = document.querySelector('.header-main__menu-close');
    // Change old start 05.03 - скорректировал событие клика
    headerMenu.addEventListener('click', () => {
        headerMenuWrapper.classList.add('open');
    });
    // Change old end 05.03
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
    // Change_old start 05.03 - скрипт изменен таким образом, чтобы список закрывался при клике вне селектора и после выбора категории
    selects.forEach((select) => {
        const categoriesSelected = select.querySelector('.selected');
        const categoriesItems = select.querySelectorAll('.item');


        select.addEventListener('click', () => {
            select.classList.add('open');
        });

        categoriesItems.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.stopPropagation();
                const value = item.dataset.value;
                // Change_old start - item.innerHTML изменен на item.firstElementChild.innerHTML чтобы выбранный элемент выводился без item__descriptions
                categoriesSelected.innerHTML = item.firstElementChild.innerHTML;
                // Change_old end
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
    // Change_old end 05.03

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

    // Страница Игры - 05.03 Меню элементов без горизонтальной прокрутки и селекта на мобильной версии (по дизайну) 

    // Скрипт меню категорий (аккунты, игры)
    const horUnScrollContainer = document.querySelectorAll('.hor-unscroll-menu');

    horUnScrollContainer.forEach(elem => {
        const horUnScrollMenuItems = elem.querySelectorAll('.hor-unscroll-menu__item');
        let activeItem = horUnScrollMenuItems?.[0];

        activeItem?.classList?.add('hor-unscroll-menu__item_active');

        const onChangeActiveItem = (element) => {
            if (activeItem) {
                activeItem.classList.remove('hor-unscroll-menu__item_active');
            }
            activeItem = element;
            element.classList.add('hor-unscroll-menu__item_active');

        }

        horUnScrollMenuItems.forEach(element => {
            element.addEventListener('click', ({ currentTarget }) => {
                onChangeActiveItem(currentTarget);
            })
        });
    })

    // Скрипт копирования промокодов
    const promoContainer = document.querySelectorAll('.promocode__wrapper');

    promoContainer.forEach(elem => {
        const promoCopy = elem.querySelectorAll('.promocode__copy');
        let activeItem;

        promoCopy.forEach(item => {
            item.addEventListener('click', () => {
                navigator.clipboard.writeText(item.previousElementSibling.innerHTML).then(
                    item.classList.add('promocode__copy_active')
                );
            });
        });

        const onChangeActiveItem = (element) => {
            if (activeItem) {
                activeItem.classList.remove('promocode__copy_active');
            }
            activeItem = element;
            element.classList.add('promocode__copy_active');
        }

        promoCopy.forEach(element => {
            element.addEventListener('click', ({ currentTarget }) => {
                onChangeActiveItem(currentTarget);
            })
        });
    });


    // Скрипт переполнения карточки отзывов review-card
    const reviewCard = document.querySelectorAll('.review-card');

    function openReviewCard(btn) {
        btn.addEventListener('click', () => {
            btn.parentElement.classList.add('open');
            btn.remove();
        })
    }

    reviewCard.forEach(elem => {
        let reviewText = elem.querySelector('.review-card__text');
        const showMoreBtn = elem.querySelector('.review-card__show-btn');

        if (reviewText.clientHeight > 69) {
            reviewText.style.height = '46px';
        } else {
            showMoreBtn.remove();
        }

        openReviewCard(showMoreBtn);
    })

    // Открытие модальных окон
    const modalButtons = document.querySelectorAll('[data-event="modal-caller"]');
    const modals = document.querySelectorAll('[data-type="modal"]');

    function showModal(id) {
        const modal = document.getElementById(id);
        modal.style.display = 'block';
        document.body.classList.add("modal-open");
        // Change old start 04.04 - отменяем прокрутку документа
        document.body.style.overflow = 'hidden';
        document.firstElementChild.style.overflow = 'hidden';
        // Change old end
    }

    modalButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Получаем id модального окна из атрибута data-modal
            const modalId = event.target.getAttribute('data-modal');
            showModal(modalId);
        });
    });

    modals.forEach(modal => {
        const modalCloseBtn = modal.querySelector(".modal__close");
        const modalFade = modal.querySelector('.modal__fade');

        // Change old start 04.04 - вынес закрытие как отд. функцию, добавил вовзращение прокрутки html и body
        function closeModal() {
            modal.style.display = 'none';
            document.body.classList.remove("modal-open");
            document.body.style.overflow = '';
            document.firstElementChild.style.overflow = '';
        }

        modalCloseBtn.addEventListener("click", () => {
            closeModal()
        });

        modal.addEventListener('click', (event) => {
            if (event.target.contains(modalFade)) {
                closeModal();
            }
        });
        // Change old end
    });

    //Скрипт мультиселекта для страницы Каталог и Категория каталога
    // Документация и методы SlimSelect - https://slimselectjs.com/methods#getData
    // Каталог
    var catalogSelect = new SlimSelect({
        select: '#catalog-select-multiple',

        settings: {
            openPosition: 'auto',
            searchPlaceholder: 'Начните вводить название категории',
            placeholderText: 'Выберите категорию',
        },

        data: [
            { text: 'Категория 1' },
            { text: 'Категория 2' },
            { text: 'Категория 3' },
            { text: 'Категория 4' },
            { text: 'Категория 5' },
            { text: 'Категория 6' },
            { text: 'Категория 7' },
            { text: 'Категория 8' },
            { text: 'Категория 9' },
            { text: 'Категория 10' }
        ],
    })

    // Категория каталога
    var catalogCategorySelect = new SlimSelect({
        select: '#catalog-category-select-single',


        settings: {
            openPosition: 'auto',
            searchPlaceholder: 'Начните вводить название игры',
        },

        // data: [
        //     { 'placeholder': true, 'text': 'Выберите игру' },
        //     { text: 'Игра 1' },
        //     { text: 'Игра 2' },
        //     { text: 'Игра 3' },
        //     { text: 'Игра 4' },
        //     { text: 'Игра 5' },
        //     { text: 'Игра 6' },
        //     { text: 'Игра 7' },
        //     { text: 'Игра 8' },
        //     { text: 'Игра 9' },
        //     { text: 'Игра 10' }
        // ],
    })


    // Страница диалога
    // Селекты в поиске .dialog-search
    // Разделы
    // var dialogCategorySelect = new SlimSelect({
    //     select: '#dialog-category-select',

    //     settings: {
    //         openPosition: 'auto',
    //         searchPlaceholder: 'Разделы...',
    //         placeholder: true,
    //         text: 'Все разделы',
    //     },
    // })

    // // Игры
    // var dialogGameSelect = new SlimSelect({
    //     select: '#dialog-game-select',

    //     settings: {
    //         openPosition: 'auto',
    //         searchPlaceholder: 'Игры...',
    //         placeholder: 'Все игры',
    //     },
    // })

    // Ниже скрипты работы блока dialog-list, когда он состоит из раскрывающихся секций
    // Открытие dialog-section
    const dialogSection = document.querySelectorAll('.dialog-section');
    const dialogCard = document.querySelectorAll('.dialog-section__item');
    const dialogMoreBtn = document.querySelector('.dialog-section__more-btn');

    dialogSection.forEach(element => {
        const dialogSectionHeader = element.querySelector('.dialog-section__header');
        dialogSectionHeader.addEventListener('click', () => {
            element.classList.toggle('open')
        })

        // Появление кнопки Загрузить ещё, если в dialog-section > 5 dialog-section__item


        if (dialogCard.length > 5) {
            dialogMoreBtn.style.display = 'none';
        }
    });


    // Обрезание текста в dialog-section__item, если он выходит за границы карточки

    dialogCard.forEach(element => {
        const dialogCardText = element.querySelector('.dialog-section__item-text');

        if (dialogCardText.scrollHeight > 24) {
            const text = dialogCardText.textContent;
            let truncatedText = text;

            while (dialogCardText.scrollHeight > 24 && truncatedText.length > 0) {
                truncatedText = truncatedText.slice(0, 40);
                dialogCardText.textContent = truncatedText + '...';
            }
        }
    });

    // При открытии страницы чат всегда на последнем сообщении
    const chatBox = document.querySelector('.dialog-chat');
    chatBox.scrollTop = chatBox.scrollHeight - chatBox.clientHeight;

    // Добавление и удаление названий добавленных файлов
    const fileInput = document.getElementById('file-upload');
    fileInput.addEventListener('change', handleFileSelect);

    function handleFileSelect(event) {
        const fileList = event.target.files;
        const fileUploadFilename = document.getElementById('file-upload-filename');

        for (let i = 0; i < fileList.length; i++) {
            const fileName = fileList[i].name;
            const fileItem = document.createElement('div');
            fileItem.className = 'dialog-message__file-item';
            const fileItemName = document.createElement('div');
            fileItemName.className = 'dialog-message__file-name';
            fileItemName.textContent = fileName;
            const fileItemDelete = document.createElement('div');
            fileItemDelete.className = 'dialog-message__file-delete';
            const fileItemDeleteSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            fileItemDeleteSvg.setAttribute('width', '13');
            fileItemDeleteSvg.setAttribute('height', '13');
            fileItemDeleteSvg.setAttribute('viewBox', '0 0 13 13');
            const fileItemDeletePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            fileItemDeletePath.setAttribute('d', 'M13 1.42272L11.8625 0.345703L6.5 5.42308L1.1375 0.345703L0 1.42272L5.3625 6.5001L0 11.5775L1.1375 12.6545L6.5 7.57712L11.8625 12.6545L13 11.5775L7.6375 6.5001L13 1.42272Z');
            fileItemDeletePath.setAttribute('fill', '#3EDA2B');
            fileItemDeleteSvg.appendChild(fileItemDeletePath);
            fileItemDelete.appendChild(fileItemDeleteSvg);
            fileItem.appendChild(fileItemName);
            fileItem.appendChild(fileItemDelete);
            fileUploadFilename.appendChild(fileItem);

            fileItemDelete.addEventListener('click', function () {
                fileItem.parentNode.removeChild(fileItem);
            });
        }
    }

    // Селекты в модалке buy
    // Игры
    var modalBuyGameSelect = new SlimSelect({
        select: '#modal-buy-game-select',

        settings: {
            openPosition: 'auto',
            searchPlaceholder: 'Игры...',
            placeholder: 'Все игры',
        },
    })

    // Услуги
    var modalBuyGameSelect = new SlimSelect({
        select: '#modal-buy-service-select',

        settings: {
            openPosition: 'auto',
            searchPlaceholder: 'Услуга...',
            placeholder: 'Все услуги',
        },
    })

    // Изменение статуса Избранное in-favorite
    const favoriteContainer = document.querySelector('.dialog-footer__favorite');
    const addFavoriteBtn = document.querySelector('.dialog-footer__favorite-item_add');
    const removeFavoriteBtn = document.querySelector('.dialog-footer__favorite-item_remove');
    addFavoriteBtn.addEventListener('click', () => {
        favoriteContainer.classList.add('in-favorite');
    })

    removeFavoriteBtn.addEventListener('click', () => {
        favoriteContainer.classList.remove('in-favorite');
    })

    // Открытие Шаблонов сообщений
    const templateBtn = document.querySelector('.dialog-footer__template');
    const templateBtnText = document.querySelector('.dialog-footer__template-title');
    const templateBtnIcon = document.querySelector('.dialog-footer__template-title-icon');
    const templateWrapper = document.querySelector('.dialog-footer__template-body');

    templateBtn.addEventListener('click', () => {
        templateWrapper.classList.toggle('open');

        if (templateWrapper.classList.contains('open')) {
            templateBtnText.textContent = "Свернуть шаблоны";
            templateBtnIcon.style.transform = "rotate(180deg)"
        } else {
            templateBtnText.textContent = "Открыть шаблоны";
            templateBtnIcon.style.transform = "rotate(360deg)"
        }
    })

    // Отправка шаблона сообщения в инпут dialog-message
    const massageInpit = document.querySelector('.dialog-message__input');
    const massageTemplate = document.querySelectorAll('.dialog-footer__template-item');
    const massageCustom = document.querySelectorAll('.dialog-footer__template-custom');

    massageTemplate.forEach(element => {
        element.addEventListener('click', () => {
            let textContent = element.textContent.substring(1, element.textContent.length - 1);
            massageInpit.value = textContent;
        })
    });

    // Отправка кастомного шаблона сообщения в инпут dialog-message и удаление кастомного шаблона из списка
    massageCustom.forEach(element => {
        const text = element.querySelector('.dialog-footer__template-custom-text');
        const removeBtn = element.querySelector('.dialog-footer__template-custom-remove');

        text.addEventListener('click', () => {
            let textContent = text.textContent.substring(1, text.textContent.length - 1);
            massageInpit.value = textContent;
        })

        removeBtn.addEventListener('click', () => {
            element.remove();
        })
    });
});