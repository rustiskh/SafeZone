
// window.addEventListener("DOMContentLoaded", () => {});

const modalAuth = `
<div data-type="modal" id="modal-auth" class="modal modal-auth">
<div class="modal__fade">
    <div class="modal__body">
        <div class="modal__close">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 2.625L27.375 0L15 12.375L2.625 0L0 2.625L12.375 15L0 27.375L2.625 30L15 17.625L27.375 30L30 27.375L17.625 15L30 2.625Z" fill="#ffffff" />
            </svg>
        </div>
        <div class="modal__title modal__title_tac">Вход</div>
        <div class="modal__text modal__text_tac">Для улучшения работы системы процесс регистрации был изменен. Теперь регистрация и аутентификация доступны только через телеграмм.</div>
        <button class="button button_icon modal__btn">
            <div class="modal__btn-icon">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.2823 8.83075L7.99299 13.9819C7.4582 14.2218 7.27732 14.7022 7.86373 14.9629L11.273 16.0519L19.5162 10.9311C19.9663 10.6097 20.4271 10.6954 20.0306 11.049L12.9508 17.4924L12.7284 20.2193C12.9344 20.6403 13.3115 20.6423 13.5521 20.433L15.5109 18.57L18.8655 21.095C19.6446 21.5587 20.0686 21.2595 20.2362 20.4097L22.4366 9.93691C22.665 8.89087 22.2754 8.42997 21.2823 8.83075Z" fill="white" />
                </svg>
            </div>
            Служба поддержки в Telegram
        </button>
        <div class="modal__text modal__text_tac">Проблема с регистрацией? Напиши в поддержку <a href="https://t.me/safezonemarket_support" class="modal__link">@safezonemarket_support</a></div>
    </div>
</div>
</div>
`;

const modalBuy = `
<div data-type="modal" id="modal-order" class="modal modal-order">
			<div class="modal__fade">
				<div class="modal__body">
					<div class="modal__close">
						<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M30 2.625L27.375 0L15 12.375L2.625 0L0 2.625L12.375 15L0 27.375L2.625 30L15 17.625L27.375 30L30 27.375L17.625 15L30 2.625Z" fill="#ffffff" />
						</svg>
					</div>
					<div class="modal__title">Форма заказа</div>
					<div class="modal__column-wrapper">
						<input class="general-input modal__input" type="text" id="login" name="login" placeholder="Логин от игрового аккакунта" />
						<input class="general-input modal__input" type="text" id="nickname" name="nickname" placeholder="Никнейм от игрового аккакунта" />
						<input class="general-input modal__input" type="text" id="password" name="password" placeholder="Пароль от игрового аккаунта" />
						<input class="general-input modal__input" type="text" id="server" name="server" placeholder="Ваш сервер" />
					</div>

					<div class="hor-unscroll-menu modal__menu-list">
						<div class="hor-unscroll-menu__wrapper">
							<div class="hor-unscroll-menu__item">
								<p class="hor-unscroll-menu__title">Google</p>
							</div>
							<div class="hor-unscroll-menu__item">
								<p class="hor-unscroll-menu__title">Facebook</p>
							</div>
							<div class="hor-unscroll-menu__item">
								<p class="hor-unscroll-menu__title">Золото</p>
							</div>
						</div>
					</div>

					<div class="modal__column-wrapper">
						<input class="general-input modal__input" type="text" id="email" name="email" placeholder="Адрес почты" />
						<input class="general-input modal__input" type="text" id="email-password" name="email-password" placeholder="Пароль от почты" />

						<div class="modal__text">Перейдите по ссылке (<a href="" class="modal__link">ссылка...</a>), включите 2х этапную аутентификацию и вставьте 2 бэкап кода в поля ниже:</div>

						<input class="general-input modal__input" type="text" id="backup-code-1" name="backup-code-1" placeholder="Введите Бэкап код №1 (8 знаков)" />
						<input class="general-input modal__input" type="text" id="backup-code-2" name="backup-code-2" placeholder="Введите Бэкап код №2 (8 знаков)" />
						<select class="general-input general-input_select modal__select" id="select-1" name="select-1">
							<option value="0">Выберите услугу</option>
							<option value="1">Услуга_1</option>
							<option value="2">Услуга_2</option>
						</select>
						<button class="button button_shadow modal__btn">Служба поддержки в Telegram</button>
						<p class="modal__error-text">Текст ошибки</p>
					</div>
				</div>
			</div>
		</div>
 `;

function openModal(modal) {
    document.body.classList.add("modal-open");
    document.body.insertAdjacentHTML("beforeend", modal);

    const modalElem = document.querySelector(".modal");
    const modalCloseBtn = modalElem.querySelector(".modal__close");
    const modalFade = modalElem.querySelector('.modal__fade');

    function closeModal() {
        modalElem.remove();
        document.body.classList.remove("modal-open");
    }

    modalCloseBtn.addEventListener("click", closeModal);
    modalElem.addEventListener("click", (e) => {
        if (e.target.contains(modalFade)) {
            closeModal();
        }
    });
}

