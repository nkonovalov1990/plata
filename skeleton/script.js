// Ждем загрузку DOM перед выполнением скрипта
document.addEventListener("DOMContentLoaded", function() {
  // Показываем основной контент
  setTimeout(() => {
    let main = document.getElementById('main');
    main.style.display = 'flex';
    main.classList.add('fadeInUp');
    
    // Инициализируем скелетоны только для products-list
    let productsList = document.getElementById('products-list');
    if (productsList) {
      initPanelSkeletons(productsList);
      // Запускаем анимацию через 1 секунду
      setTimeout(() => {
        animateSkeletons(productsList);
      }, 2000);
    }
  }, 1000);
});

// Функция инициализации скелетонов для панели
function initPanelSkeletons(panel) {
  const textElements = panel.querySelectorAll(".text");
  textElements.forEach(element => {
    const lineHeight = getComputedStyle(element).lineHeight;
    element.style.height = lineHeight;
    // Генерируем случайную ширину от 40% до 80%
    const randomWidth = Math.floor(Math.random() * 15) + 15;
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