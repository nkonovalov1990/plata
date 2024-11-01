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

  progressSlider.addEventListener('input', function () {
    const value = parseInt(progressSlider.value);
    updateProgressBar(value);
  });

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
    } else if (value < 56) {
      progressWidth = ((value - 52) / 4) * 100;
      progressColor = 'var(--step-2-alfa)';
      progressTextColor = 'var(--step-2)';
      nextBucketColor = 'var(--step-3-alfa)';
      nextBucketTextColor = 'var(--step-3)';
      progressButtons.style.flexDirection = 'row';
      nextBucket.textContent = 'Próximo cubo 56%';
    } else if (value < 68) {
      progressWidth = ((value - 55) / 13) * 100;
      progressColor = 'var(--step-3-alfa)';
      progressTextColor = 'var(--step-3)';
      nextBucketColor = 'var(--step-4-alfa)';
      nextBucketTextColor = 'var(--step-4)';
      progressButtons.style.flexDirection = 'row';
      nextBucket.textContent = 'Próximo cubo 68%';
    } else if (value < 75) {
      progressWidth = ((value - 67) / 8) * 100;
      progressColor = 'var(--step-4-alfa)';
      progressTextColor = 'var(--step-4)';
      nextBucketColor = 'var(--step-5-alfa)';
      nextBucketTextColor = 'var(--step-5)';
      progressButtons.style.flexDirection = 'row';
      nextBucket.textContent = 'Próximo cubo 75%';
    } else if (value < 83) {
      progressWidth = ((value - 74) / 9) * 100;
      progressColor = 'var(--step-5-alfa)';
      progressTextColor = 'var(--step-5)';
      nextBucketColor = 'var(--step-6-alfa)';
      nextBucketTextColor = 'var(--step-6)';
      progressButtons.style.flexDirection = 'row';
      nextBucket.textContent = 'Próximo кубо 83%';
    } else {
      progressWidth = ((value - 82) / 17) * 100;
      progressColor = 'var(--step-6-alfa)';
      progressTextColor = 'var(--step-6)';
      nextBucketColor = 'var(--step-5-alfa)';
      nextBucketTextColor = 'var(--step-5)';

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
  }

  document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('#progress-bar');
    const progressText = progressBar.querySelector('span');

    function adjustProgressBarAlignment() {
        const progressBarWidth = progressBar.offsetWidth;
        const spanWidth = progressText.offsetWidth;

        console.log("progressBarWidth " + progressBarWidth);

        if (progressBarWidth > spanWidth) {
            progressBar.style.justifyContent = 'flex-end';
        } else {
            progressBar.style.justifyContent = 'flex-start';
        }
    }

    // Запуск при загрузке страницы
    adjustProgressBarAlignment();

    // Обновление при изменении ширины прогресс бара
    window.addEventListener('resize', adjustProgressBarAlignment);

    // Пример для изменения ширины прогресс бара в зависимости от слайдера
    const progressSlider = document.getElementById('progress-slider');
    progressSlider.addEventListener('input', function() {
        progressBar.style.width = `${progressSlider.value}%`;
        adjustProgressBarAlignment();
    });
  });
});
