// Массив уровней, определяющий шаги прогресса
let levels = [0, 53, 56, 68, 75, 83, 100];
let currentLevelIndex = 0; // Начальный индекс уровня

// Получаем кнопку для перехода к следующему уровню
let nextLevelButton = document.getElementById("next-level-button");

// Получаем основные элементы в блоке с id="a"
let A = document.querySelector("#a");
let B = document.querySelector("#b");
let C = document.querySelector("#c");

let progressBarA = A.querySelector(".progress-bar");
let progressTextA = progressBarA.querySelector("span");
let nextBucketA = A.querySelector(".next-bucket");
let nextBucketTextA = nextBucketA.querySelector("span");
let previousBucketA = A.querySelector(".previous-bucket");
let previousBucketTextA = previousBucketA.querySelector("span");
let progressBarAWidth = progressBarA.offsetWidth;

let progressBarB = B.querySelector(".progress-bar");
let progressTextB = progressBarB.querySelector("span");
let nextBucketB = B.querySelector(".next-bucket");
let nextBucketTextB = nextBucketB.querySelector("span");
let previousBucketB = B.querySelector(".previous-bucket");
let previousBucketTextB = previousBucketB.querySelector("span");
let progressBarBWidth = progressBarB.offsetWidth;

let progressBarC = C.querySelector(".progress-bar");
let progressTextC = progressBarC.querySelector("span");
let nextBucketC = C.querySelector(".next-bucket");
let nextBucketTextC = nextBucketC.querySelector("span");
let previousBucketC = C.querySelector(".previous-bucket");
let previousBucketTextC = previousBucketC.querySelector("span");
let progressBarCWidth = progressBarC.offsetWidth;

// Функция для плавного увеличения значения текста
function animateProgressText(start, end) {
    let current = start;
    const interval = setInterval(() => {
        current++;
        progressTextA.innerText = `CR ${current}%`; // Обновляем текст
        if (current >= end) {
            clearInterval(interval); // Останавливаем, когда достигли конечного значения
        }
    }, 10); // Задержка между шагами анимации (меньше значение — быстрее обновление)
}

// Функция, выполняющая переход к следующему уровню
function advanceToNextLevel() {
    // Проверяем, что текущий индекс не выходит за пределы массива уровней
    if (currentLevelIndex < levels.length - 1) {
        currentLevelIndex++; // Переход к следующему уровню
    }
    // Получаем текущее и предыдущее значения уровня из массива
    let currentLevel = levels[currentLevelIndex];
    let previousLevel = levels[currentLevelIndex - 1] || 0;

    // Запускаем анимацию увеличения текста от предыдущего значения к текущему
    animateProgressText(previousLevel, currentLevel);

    // Логика для каждого уровня по индексу
    switch (currentLevelIndex) {
        case 0:
            break;
        case 1:
            const interval = setInterval(() => {
                if (progressBarAWidth >= 100) {
                    clearInterval(interval); // Останавливаем, когда достигнем 100%
                } else {
                    progressBarAWidth = progressBarA.offsetWidth;      
                    let progressTextAWidth = progressTextA.offsetWidth;     
                    if (progressBarAWidth > progressTextAWidth) {
                        progressBarA.style.justifyContent = 'flex-end';
                    } else {
                        progressBarA.style.justifyContent = 'flex-start';
                    }
                }
            }, 1);
            progressBarA.style.width = "136px"; // Укажите ширину вручную
            nextBucketTextA.innerText = `Próximo cubo ${levels[currentLevelIndex + 1]}%`;
            previousBucketTextA.innerText = `Cubo anterior ${levels[currentLevelIndex - 1]}%`;

            setTimeout(() => {
                A.classList.add("fade-out-left");
                progressBarA.style.width = "0";
            }, 1200);

            setTimeout(() => {
                A.style.display = "none";
                B.querySelector(".next-bucket span").classList.add("fade-out-left");
                C.classList.add("fade-in-left");
                C.style.display = "flex";
            }, 1800);

            setTimeout(() => {
                B.querySelector(".next-bucket").display = "none";
                progressTextB.style.color = "var(--step-2)";
                progressBarB.classList.remove("display-none");
                progressBarB.classList.add("fade-in-left");
            }, 2000);

            
            break;
        case 2:
            progressBarA.style.width = "80%"; // Укажите ширину вручную
            nextBucketTextA.innerText = `Próximo cubo ${levels[currentLevelIndex + 1]}%`;
            previousBucketTextA.innerText = `Cubo anterior ${levels[currentLevelIndex - 1]}%`;
            break;
        case 3:
            progressBarA.style.width = "100%"; // Укажите ширину вручную
            nextBucketTextA.innerText = `Próximo cubo ${levels[currentLevelIndex + 1]}%`;
            previousBucketTextA.innerText = `Cubo anterior ${levels[currentLevelIndex - 1]}%`;
            break;
        case 4:
            progressBarA.style.width = "100%"; // Укажите ширину вручную
            nextBucketTextA.innerText = `Próximo cubo ${levels[currentLevelIndex + 1]}%`;
            previousBucketTextA.innerText = `Cubo anterior ${levels[currentLevelIndex - 1]}%`;
            break;
        case 5:
            progressBarA.style.width = "100%"; // Укажите ширину вручную
            nextBucketTextA.innerText = `Próximo cubo ${levels[currentLevelIndex + 1]}%`;
            previousBucketTextA.innerText = `Cubo anterior ${levels[currentLevelIndex - 1]}%`;
            break;
        case 6:
            progressBarA.style.width = "100%"; // Укажите ширину вручную
            nextBucketTextA.innerText = `Maximum level reached`;
            previousBucketTextA.innerText = `Cubo anterior ${levels[currentLevelIndex - 1]}%`;
            break;
        default:
            break;
    }
}

// Привязываем функцию advanceToNextLevel к событию "click" кнопки
nextLevelButton.addEventListener("click", advanceToNextLevel);