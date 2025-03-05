// Ждем загрузку DOM перед выполнением скрипта
document.addEventListener("DOMContentLoaded", function() {
  
  // Находим все элементы с классом text для создания скелетон-эффекта
  const gradientElements = document.querySelectorAll(".text");

  // Применяем стили к каждому элементу скелетона
  gradientElements.forEach(element => {
    // Получаем и устанавливаем высоту строки для элемента
    const lineHeight = getComputedStyle(element).lineHeight;
    element.style.height = lineHeight;
    
    let randomWidth = Math.floor(Math.random() * 20) + 20;
    element.style.width = randomWidth + '%';
  });
  
  // Основной таймер для начала анимаций (1 секунда)
  setTimeout(() => {
    // Показываем основной контент
    document.getElementById('main').style.display = 'flex';
    document.getElementById('main').classList.add('fadeInUp');
    
    // Таймер для инициализации анимаций (600ms)
    setTimeout(() => {
      // Функция анимации элемента
      function applyAnimation(element) {
        // Проверка на повторную анимацию
        if (element.dataset.animated) return;

        // Находим все скелетоны внутри элемента
        const skeletons = element.getElementsByClassName('skeleton');
        Array.from(skeletons).forEach(skeleton => {
          // Анимация исчезновения
          skeleton.animate([
              { opacity: 1 },
              { opacity: 0 }
          ], {
              duration: 200,
              fill: 'forwards'
          });

          // Применяем финальные стили после анимации
          setTimeout(() => {
            skeleton.style.animation = 'none';
            skeleton.classList.remove('skeleton-fill', 'skeleton');
            
            // Сбрасываем ширину на автоматическую
            skeleton.style.width = 'auto';
            skeleton.style.height = 'auto';
          
          }, 300);

          // Анимация появления контента
          skeleton.animate([
            { opacity: 0 },
            { opacity: 1 }
          ], {
            delay: 500,
            duration: 300,
            fill: 'forwards'
          });
        });

        // Помечаем элемент как анимированный
        element.dataset.animated = 'true';
      }

      // Массив элементов для анимации с проверкой существования
      const elements = [
        'credit-account',
        'products-list',
        'credit-account-panel',
        'cash-loan-panel',
        'plata-difiere',
        'personal-loan',
        'transaction'
      ].map(id => document.getElementById(id))
       .filter(element => element !== null);

      // Запуск случайных анимаций
      setInterval(() => {
        if (elements.length > 0) {
          const randomElement = elements[Math.floor(Math.random() * elements.length)];
          applyAnimation(randomElement);
        }
      }, 500);

    }, 600);
  }, 1000);
});

// Функция инициализации скелетонов для панели
function initPanelSkeletons(panel) {
  const textElements = panel.querySelectorAll(".text");
  textElements.forEach(element => {
    const lineHeight = getComputedStyle(element).lineHeight;
    element.style.height = lineHeight;
    let randomWidth = Math.floor(Math.random() * 20) + 20;
    element.style.width = randomWidth + '%';
    element.classList.add('skeleton', 'skeleton-fill');
  });
}

// Функция анимации скелетонов
function animateSkeletons(panel) {
  const skeletons = panel.querySelectorAll('.skeleton');
  skeletons.forEach(skeleton => {
    // Анимация исчезновения
    skeleton.animate([
      { opacity: 1 },
      { opacity: 0 }
    ], {
      duration: 200,
      fill: 'forwards'
    });

    // Применяем финальные стили после анимации
    setTimeout(() => {
      skeleton.style.animation = 'none';
      skeleton.classList.remove('skeleton-fill', 'skeleton');
      skeleton.style.width = 'auto';
      skeleton.style.height = 'auto';
    }, 300);

    // Анимация появления контента
    skeleton.animate([
      { opacity: 0 },
      { opacity: 1 }
    ], {
      delay: 500,
      duration: 300,
      fill: 'forwards'
    });
  });
}