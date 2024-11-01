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

    if (value <= 53) {
      progressWidth = (value / 53) * 100;
      progressColor = 'var(--step-1-alfa)';
      progressTextColor = 'var(--step-1)';
      nextBucketColor = 'var(--step-2-alfa)';
      nextBucketTextColor = 'var(--step-2)';
      progressButtons.style.flexDirection = 'row';
      nextBucket.textContent = 'Próximo cubo 53%';
    } else if (value <= 56) {
      progressWidth = ((value - 53) / 3) * 100;
      progressColor = 'var(--step-2-alfa)';
      progressTextColor = 'var(--step-2)';
      nextBucketColor = 'var(--step-3-alfa)';
      nextBucketTextColor = 'var(--step-3)';
      progressButtons.style.flexDirection = 'row';
      nextBucket.textContent = 'Próximo cubo 56%';
    } else if (value <= 68) {
      progressWidth = ((value - 56) / 12) * 100;
      progressColor = 'var(--step-3-alfa)';
      progressTextColor = 'var(--step-3)';
      nextBucketColor = 'var(--step-4-alfa)';
      nextBucketTextColor = 'var(--step-4)';
      progressButtons.style.flexDirection = 'row';
      nextBucket.textContent = 'Próximo cubo 68%';
    } else if (value <= 75) {
      progressWidth = ((value - 68) / 7) * 100;
      progressColor = 'var(--step-4-alfa)';
      progressTextColor = 'var(--step-4)';
      nextBucketColor = 'var(--step-5-alfa)';
      nextBucketTextColor = 'var(--step-5)';
      progressButtons.style.flexDirection = 'row';
      nextBucket.textContent = 'Próximo cubo 75%';
    } else if (value <= 83) {
      progressWidth = ((value - 75) / 8) * 100;
      progressColor = 'var(--step-5-alfa)';
      progressTextColor = 'var(--step-5)';
      nextBucketColor = 'var(--step-6-alfa)';
      nextBucketTextColor = 'var(--step-6)';
      progressButtons.style.flexDirection = 'row';
      nextBucket.textContent = 'Próximo cubo 83%';
    } else {
      progressWidth = ((value - 83) / 17) * 100;
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
});