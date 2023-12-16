document.addEventListener("DOMContentLoaded", function() {
  const skeletonElements = document.querySelectorAll('.skeleton');
  setTimeout(() => {  
    skeletonElements.forEach(element => {
        // Устанавливаем случайную задержку до 5 секунд для каждого элемента
        const delay = Math.random() * 9000;

        setTimeout(() => {
          element.style.transition = 'opacity 500ms';
          element.style.opacity = 0;

          setTimeout(() => {
            element.classList.remove('gradient-left-to-right', 'gradient-right-to-left', 'gradient-center');
            element.style.animation = 'none';
            element.style.color = 'rgba(15, 43, 102, 0.22)';
          }, 500);

          setTimeout(() => {
            element.style.transition = 'opacity 250ms';
            element.style.opacity = 1;
          }, 1000);

          setTimeout(() => {
            element.style.transition = 'all 250ms';
            element.style.filter = 'blur(0px)';
            element.style.color = 'rgba(0, 0, 0, 0.8)';
          }, 1500);
        }, delay);
    });
  }, 3000);
});