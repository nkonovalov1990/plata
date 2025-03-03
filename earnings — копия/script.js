// Скрипт для реализации поведения элементов при прокрутке
const headerElements = document.querySelectorAll("[class*='header-category-']");

window.addEventListener('scroll', () => {
  for (let i = 0; i < headerElements.length; i++) {
    const currentElement = headerElements[i];
    const nextElement = headerElements[i + 1];

    if (nextElement) {
      const rectCurrent = currentElement.getBoundingClientRect();
      const rectNext = nextElement.getBoundingClientRect();

      if (rectCurrent.top < 0 && rectNext.top > 57) {
        currentElement.style.top = '0px';
      } else if (rectNext.top <= 57) {
        currentElement.style.top = '-57px';
      }
    }
  }
});

// Дополнительный код для изменения ширины прогресс бара
document.getElementById("progress-slider").addEventListener("input", function () {
  const progressBar = document.getElementById("progress-bar");
  const sliderValue = this.value;

  progressBar.style.width = sliderValue + "%";
  progressBar.querySelector("span").textContent = "CR " + sliderValue + "%";
});

document.addEventListener('DOMContentLoaded', function () {
  const progressSlider = document.getElementById('progress-slider');
  const progressBar = document.getElementById('progress-bar');
  const nextBucket = document.getElementById('next-bucket');
  const progressButtons = document.querySelector('.progress-buttons');
  const progressBarContainer = document.getElementById('progress-bar-container');
  const progressText = progressBar.querySelector('span');

  progressSlider.addEventListener('input', function () {
    const value = parseInt(progressSlider.value);
    updateProgressBar(value);
    updateSpan();
  });

  function updateSpan() {
    let progressBarWidth = progressBar.offsetWidth;
    let progressBarWidthPercent = parseFloat(progressBar.style.width);
    console.log("progressBarWidth " + progressBarWidth);
    console.log("progressBarWidthPercent " + progressBarWidthPercent);
    let spanWidth = progressText.offsetWidth;
      if (progressBarWidth > spanWidth && progressBarWidthPercent > 25) {
        progressBar.style.justifyContent = 'flex-end';
      } else {
        progressBar.style.justifyContent = 'flex-start';
      }
  }

  function updateProgressBar(value) {
    let progressWidth = 0;
    let progressColor = '';
    let progressTextColor = '';
    let nextBucketColor = '';
    let nextBucketTextColor = '';

    if (value < 53) {
      progressWidth = (value / 53) * 100;
      progressColor = 'var(--step-1-alfa)';
      progressTextColor = 'var(--step-1)';
      nextBucketColor = 'var(--step-2-alfa)';
      nextBucketTextColor = 'var(--step-2)';
      progressButtons.style.flexDirection = 'row';
      nextBucket.textContent = 'Próximo cubo 53%';
      progressBarContainerColor =  'var(--step-1-alfa)';
    } else if (value < 56) {
      progressWidth = ((value - 52) / 4) * 100;
      progressColor = 'var(--step-2-alfa)';
      progressTextColor = 'var(--step-2)';
      nextBucketColor = 'var(--step-3-alfa)';
      nextBucketTextColor = 'var(--step-3)';
      progressButtons.style.flexDirection = 'row';
      nextBucket.textContent = 'Próximo cubo 56%';
      progressBarContainerColor =  'var(--step-2-alfa)';
    } else if (value < 68) {
      progressWidth = ((value - 55) / 13) * 100;
      progressColor = 'var(--step-3-alfa)';
      progressTextColor = 'var(--step-3)';
      nextBucketColor = 'var(--step-4-alfa)';
      nextBucketTextColor = 'var(--step-4)';
      progressButtons.style.flexDirection = 'row';
      nextBucket.textContent = 'Próximo cubo 68%';
      progressBarContainerColor =  'var(--step-3-alfa)';
      progressBar.style.justifyContent = 'flex-start';
    } else if (value < 75) {
      progressWidth = ((value - 67) / 8) * 100;
      progressColor = 'var(--step-4-alfa)';
      progressTextColor = 'var(--step-4)';
      nextBucketColor = 'var(--step-5-alfa)';
      nextBucketTextColor = 'var(--step-5)';
      progressButtons.style.flexDirection = 'row';
      nextBucket.textContent = 'Próximo cubo 75%';
      progressBarContainerColor =  'var(--step-4-alfa)';
    } else if (value < 83) {
      progressWidth = ((value - 74) / 9) * 100;
      progressColor = 'var(--step-5-alfa)';
      progressTextColor = 'var(--step-5)';
      nextBucketColor = 'var(--step-6-alfa)';
      nextBucketTextColor = 'var(--step-6)';
      progressButtons.style.flexDirection = 'row';
      nextBucket.textContent = 'Próximo cubo 83%';
      progressBarContainerColor =  'var(--step-5-alfa)';
    } else {
      progressWidth = ((value - 82) / 17) * 100;
      progressColor = 'var(--step-6-alfa)';
      progressTextColor = 'var(--step-6)';
      nextBucketColor = 'var(--step-5-alfa)';
      nextBucketTextColor = 'var(--step-5)';
      progressBarContainerColor =  'var(--step-6-alfa)';

      // Set flex-direction to row-reverse for progress-buttons
      progressButtons.style.flexDirection = 'row-reverse';

      // Update next-bucket text
      nextBucket.textContent = 'Cubo anterior 83%';
    } 

    progressBar.style.width = `${progressWidth}%`;
    progressBar.style.backgroundColor = progressColor;
    progressBar.querySelector('span').style.color = progressTextColor;
    nextBucket.style.backgroundColor = nextBucketColor;
    nextBucket.style.color = nextBucketTextColor;
    progressBarContainer.style.backgroundColor = progressBarContainerColor;
  }
});

// Массив уровней
let levels = [0, 53, 56, 68, 75, 83, 100];

// Функция для нахождения ближайшего следующего уровня
let getNextLevel = function(currentValue) {
  for (let i = 0; i < levels.length; i++) {
    if (levels[i] > currentValue) {
      return levels[i];
    }
  }
  return 100;
};

// Функция для нахождения ближайшего предыдущего уровня
let getPrevLevel = function(currentValue) {
  for (let i = levels.length - 1; i >= 0; i--) {
    if (levels[i] < currentValue) {
      return levels[i];
    }
  }
  return 0;
};

// Элементы слайдера и кнопок
let progressSlider = document.getElementById("progress-slider");
let nextLevelButton = document.getElementById("next-level-button");
let prevLevelButton = document.getElementById("prev-level-button");
let progressBarContainer = document.getElementById("progress-bar-container");
let nextBucket = document.getElementById("next-bucket");

let isAnimating = false;

// Функция для плавной анимации перехода на следующий уровень
function triggerNextLevelAnimation() {
    if (isAnimating) return;
    isAnimating = true;

    // Скрываем progress-bar-container и расширяем next-bucket
    progressBarContainer.classList.add("fade-out");
    nextBucket.classList.add("expand");

    setTimeout(() => {
        const currentValue = parseInt(progressSlider.value);
        const nextLevel = getNextLevel(currentValue);

        // Обновляем значение слайдера и вызываем обновление прогресса
        progressSlider.value = nextLevel;
        progressSlider.dispatchEvent(new Event("input"));

        // Сбрасываем стили анимации
        progressBarContainer.classList.remove("fade-out");
        nextBucket.classList.remove("expand");

        // Обновляем текстовое значение в progress-bar-container и nextBucket
        progressBarContainer.querySelector("span").textContent = `CR ${nextLevel}%`;
        nextBucket.textContent = `Próximo cubo ${getNextLevel(nextLevel)}%`;

        isAnimating = false;
    }, 500); 
}

// Функция для плавного возврата на предыдущий уровень
function triggerPrevLevelAnimation() {
    if (isAnimating) return;
    isAnimating = true;

    // Аналогичная анимация для предыдущего уровня
    progressBarContainer.classList.add("fade-out");
    nextBucket.classList.add("expand");

    setTimeout(() => {
        const currentValue = parseInt(progressSlider.value);
        const prevLevel = getPrevLevel(currentValue);

        // Обновляем значение слайдера и вызываем обновление прогресса
        progressSlider.value = prevLevel;
        progressSlider.dispatchEvent(new Event("input"));

        // Сбрасываем стили анимации
        progressBarContainer.classList.remove("fade-out");
        nextBucket.classList.remove("expand");

        // Обновляем текстовое значение в progress-bar-container и nextBucket
        progressBarContainer.querySelector("span").textContent = `CR ${prevLevel}%`;
        nextBucket.textContent = `Próximo cubo ${getNextLevel(prevLevel)}%`;

        isAnimating = false;
    }, 500); 
}

// Обработчики для кнопок
nextLevelButton.addEventListener("click", triggerNextLevelAnimation);
prevLevelButton.addEventListener("click", triggerPrevLevelAnimation);

// Слайдер также обновляет прогресс бар при изменении
progressSlider.addEventListener('input', function () {
    const value = parseInt(progressSlider.value);
    updateProgressBar(value);
});

// Функция для обновления ширины и цвета прогресс-бара в зависимости от уровня
function updateProgressBar(value) {
    // Реализация updateProgressBar из предыдущего кода
}