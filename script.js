document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".transition-overlay");

    // 1. Эффект при загрузке: убираем шторку вверх
    setTimeout(() => {
        overlay.classList.remove("active");
        // Смещаем шторку вверх за пределы экрана
        overlay.style.transform = "translateY(-100%)";
    }, 100);

    // 2. Эффект при клике на ссылки 
    const links = document.querySelectorAll(".transition-trigger, .menu-link");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetUrl = link.getAttribute("href");

            // Проверяем, что ссылка ведет на другую страницу и это не текущая страница
            if (targetUrl && targetUrl !== "#" && !link.classList.contains("active")) {
                e.preventDefault(); // Останавливаем мгновенный переход

                // Возвращаем шторку снизу, закрывая экран
                overlay.style.transform = "translateY(100%)";
                
                setTimeout(() => {
                    overlay.classList.add("active");
                }, 10);

                // После того как шторка полностью закрыла экран (через 600мс), переходим на страницу
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 600);
            }
        });
    });
});
// Переключение общежитий в альбомах
const dormButtons = document.querySelectorAll('.dorm-btn');
const dormViews = document.querySelectorAll('.dorm-view');

dormButtons.forEach(button => {
    button.addEventListener('click', () => {
        const dormName = button.getAttribute('data-dorm');

        // 1. Меняем активную кнопку
        dormButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // 2. Показываем нужное общежитие и скрываем остальные
        dormViews.forEach(view => {
            view.classList.remove('active');
            if (view.id === `dorm-${dormName}`) {
                view.classList.add('active');
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const charCards = document.querySelectorAll('.char-card');
    const modal = document.getElementById('char-modal');
    const modalImg = document.getElementById('modal-img');
    const modalClose = document.getElementById('modal-close');

    if (modal && modalImg) {
        // При клике на карточку персонажа
        charCards.forEach(card => {
            card.addEventListener('click', () => {
                const cardImgSrc = card.getAttribute('data-card');
                
                if (cardImgSrc) {
                    modalImg.src = cardImgSrc; // Устанавливаем ссылку на готовую картинку
                    modal.classList.add('active'); // Показываем окно
                }
            });
        });

        // Функция закрытия окна
        const closeModal = () => {
            modal.classList.remove('active');
        };

        // Закрытие по нажатию на крестик
        if (modalClose) {
            modalClose.addEventListener('click', closeModal);
        }

        // Закрытие по клику на темный фон вокруг карточки
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Закрытие по клавише ESC на клавиатуре
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }
});
