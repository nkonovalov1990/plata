document.addEventListener("DOMContentLoaded", function() {
  


  const gradientElements = document.querySelectorAll(".text");

  // Перебираем все найденные элементы
  gradientElements.forEach(element => {
    // Получаем высоту строки элемента
    const lineHeight = getComputedStyle(element).lineHeight;

    // Устанавливаем высоту строки в качестве высоты элемента
    element.style.height = lineHeight;

    // Генерируем и применяем случайную ширину
    let randomWidth = Math.floor(Math.random() * 50) + 30;
    element.style.width = randomWidth + '%';
  });



  let masterCard = document.querySelectorAll(".master-card");
  masterCard.forEach(element => {
    // element.style.opacity = '0';
  });



  // Функция для применения анимации к элементу
  function applyAnimation(element) {
    // Проверяем, была ли уже применена анимация
    if (element.dataset.animated) {
      return; // Если анимация уже была применена, выходим из функции
    }

    const skeletons = element.getElementsByClassName('skeleton');
    Array.from(skeletons).forEach(skeleton => {

        skeleton.animate([
            { opacity: 1 },
            { opacity: 0 }
        ], {
            duration: 300,
            fill: 'forwards'
        });

        setTimeout(() => {
          skeleton.style.animation = 'none';
          skeleton.classList.remove('skeleton-fill');
          skeleton.style.color = 'rgba(0, 0, 0, 0.8)';
          if (skeleton.classList.contains('text')) {
            skeleton.style.width = 'auto';
            skeleton.style.height = 'auto';
          }
          if (skeleton.classList.contains('avatar')) {
            skeleton.style.background = 'var(--neutral-120)';
          }
        }, 300);

        skeleton.animate([
          { opacity: 0 },
          { opacity: 1 }
        ], {
          delay: 500,
          duration: 300,
          fill: 'forwards'
        });
      
    });

    // Отмечаем элемент как анимированный
    element.dataset.animated = 'true';
  }

  // Получаем элементы
  const elements = [
    document.getElementById('credit-account'),
    document.getElementById('plata-difiere'),
    document.getElementById('personal-loan'),
    document.getElementById('transaction'),
  ];

  // Функция для выбора случайного элемента и применения к нему анимации
  function animateRandomElement() {
    // Выбираем случайный элемент из массива
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    applyAnimation(randomElement);
  }

  // Устанавливаем интервал
  setTimeout(() => {
    setInterval(animateRandomElement, 500);
  }, 1500);




  // Функция, которая будет вызываться при каждом изменении
  function handleMutation(mutations) {
    mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-animated') {
            let targetElement = mutation.target;
            if (targetElement.getAttribute('data-animated') === 'true') {
              setTimeout(() => {
                document.getElementById('cards').classList.add('cards-container-height-change');
                // Получаем все элементы с классом 'plug'
                let plugs = document.querySelectorAll('.plug');
                // Перебираем каждый элемент и устанавливаем его display в 'none'
                plugs.forEach(function(element) {
                  element.style.display = 'none';
                });
                let cards = document.querySelectorAll('.card-wrapper');
                // Перебираем каждый элемент и устанавливаем его display в 'none'
                cards.forEach(function(element) {
                  element.classList.remove('opacity-0');
                  element.style.background = 'var(--neutral-100)';
                });
              }, 500);
            }
        }
    });
  }

  // Создание экземпляра MutationObserver
  const observer = new MutationObserver(handleMutation);

  // Настройка конфигурации наблюдателя: отслеживание изменений атрибутов
  const config = { attributes: true };

  // Получение всех элементов с классом card-wrapper под другим именем переменной
  const creditAccount = document.querySelectorAll('#credit-account');

  // Начало наблюдения за каждым элементом
  creditAccount.forEach(element => {
    observer.observe(element, config);
  });



});




