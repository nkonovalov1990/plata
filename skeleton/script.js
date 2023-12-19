document.addEventListener("DOMContentLoaded", function() {

  // Получаем все элементы с классом, содержащим слово 'gradient'
  const gradientElements = document.querySelectorAll(".text");

  // Перебираем все найденные элементы
  gradientElements.forEach(element => {
    // Получаем высоту строки элемента
    const lineHeight = getComputedStyle(element).lineHeight;

    // Устанавливаем высоту строки в качестве высоты элемента
    element.style.height = lineHeight;

    // Генерируем и применяем случайную ширину
    const randomWidth = Math.floor(Math.random() * 51) + 30;
    element.style.width = randomWidth + '%';
  });

  const skeletonElements = document.querySelectorAll('.text');
  setTimeout(() => {  
    skeletonElements.forEach(element => {
        // Устанавливаем случайную задержку до 5 секунд для каждого элемента
        const delay = Math.random() * 10000;

        setTimeout(() => {
          element.animate([
            { opacity: 1 },
            { opacity: 0 }
          ], {
            duration: 200,
            fill: 'forwards'
          });

          setTimeout(() => {
            element.style.animation = 'none';
            element.classList.remove('skeleton-fill', 'gradient-left-to-right', 'gradient-right-to-left', 'gradient-center');
            element.style.color = 'rgba(0, 0, 0, 0.8)';
            element.style.width = 'auto';
            element.style.height = 'auto';
          }, 300);

          element.animate([
            { opacity: 0 },
            { opacity: 1 }
          ], {
            delay: 500,
            duration: 200,
            fill: 'forwards'
          });
        
        }, delay);
    });
  }, 3000);
});