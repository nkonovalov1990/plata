function HideProductsList(){
    let productsList = document.getElementById('products-list');

    let productsListAnimation = productsList.animate([
        { opacity: 1, transform: 'translateX(0px)' },
        { opacity: 0, transform: 'translateX(-20px)' }
    ], {
        duration: 120,
        fill: 'forwards',
        easing: 'ease-in-out'
    });

    // После завершения анимации скрываем панель
    productsListAnimation.onfinish = () => {
        productsList.style.display = 'none';
        productsList.style.display.hidden = true;
        // productsList.style.height = "0";
    };
}

function DeepIntoCreditAccount() {
    HideProductsList();
    let panel = document.getElementById('credit-account-panel');
    setTimeout(() => {
        if (panel) {
            // Инициализируем скелетоны только при первом показе
            if (!panel.dataset.skeletonsInitialized) {
              initPanelSkeletons(panel);
              panel.dataset.skeletonsInitialized = 'true';
              
              // Запускаем анимацию скелетонов через небольшую задержку
              setTimeout(() => {
                animateSkeletons(panel);
              }, 2000);
            }
            panel.style.display = "flex";
            panel.animate([
              { opacity: 0, transform: 'translateX(20px)' },
              { opacity: 1, transform: 'translateX(0px)' }
            ], {
              duration: 120,
              fill: 'forwards',
              easing: 'ease-in-out'
            });
          }
    }, 100);
}

function DeepIntoCashLoan() {
    HideProductsList();
    let panel = document.getElementById('cash-loan-panel');
    setTimeout(() => {
        if (panel) {
            // Инициализируем скелетоны только при первом показе
            if (!panel.dataset.skeletonsInitialized) {
              initPanelSkeletons(panel);
              panel.dataset.skeletonsInitialized = 'true';
              
              // Запускаем анимацию скелетонов через небольшую задержку
              setTimeout(() => {
                animateSkeletons(panel);
              }, 2000);
            }       
            panel.style.display = "flex";
            panel.animate([
              { opacity: 0, transform: 'translateX(20px)' },
              { opacity: 1, transform: 'translateX(0px)' }
            ], {
              duration: 120,
              fill: 'forwards',
              easing: 'ease-in-out'
            });
          }
    }, 100);
}

function BackToProductsList(panelId) {
  // Анимация скрытия текущей панели
  let currentPanel = document.getElementById(panelId);
  if (currentPanel) {
    // Анимируем исчезновение текущей панели
    let hideAnimation = currentPanel.animate([
      { opacity: 1, transform: 'translateX(0px)' },
      { opacity: 0, transform: 'translateX(20px)' }
    ], {
      duration: 120,
      fill: 'forwards',
      easing: 'ease-in-out'
    });
    // После завершения анимации скрываем панель
    hideAnimation.onfinish = () => {
        currentPanel.style.display = 'none';
        currentPanel.style.display.hidden = true;
        currentPanel.style.height = "0";
        // Показываем и анимируем список продуктов
        let productsList = document.getElementById("products-list");
        if (productsList) {
            productsList.style.display = 'flex';
            productsList.style.opacity = '0';
            
            productsList.animate([
            { opacity: 0, transform: 'translateX(-20px)' },
            { opacity: 1, transform: 'translateX(0px)' }
            ], {
            duration: 120,
            fill: 'forwards',
            easing: 'ease-in-out'
            });
        }
    };
  }
}

function showCashLoanProductWidgetHeader() {
  let cashLoanSection = document.getElementById('personal-loan');
  cashLoanSection.style.display = 'flex';
  cashLoanSection.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], {
    duration: 300,
    fill: 'forwards',
    easing: 'ease-in-out'
  });
  let productsList = document.getElementById('products-list');
  productsList.animate([
      { height: '40px' },
      { height: '80px' }
    ], {
      duration: 120,
      fill: 'forwards',
      easing: 'ease-in-out'
    });
}

function showLeftPanel() {
  setTimeout(() => {
    let panel = document.getElementById('left-panel');
    if (panel) {
        panel.style.display = "flex";
        panel.animate([
            { opacity: 0, transform: 'translateX(-20px)' },
            { opacity: 1, transform: 'translateX(0px)' }
        ], {
            duration: 120,
            fill: 'forwards',
            easing: 'ease-in-out'
        });
    }  
  }, 120);
}

function hideLeftPanel() {
    let panel = document.getElementById('left-panel');
    if (panel) {
        const hideAnimation = panel.animate([
            { opacity: 1, transform: 'translateX(0px)' },
            { opacity: 0, transform: 'translateX(-20px)' }
        ], {
            duration: 120,
            fill: 'forwards',
            easing: 'ease-in-out'
        });

        // Hide panel after animation completes
        hideAnimation.onfinish = () => {
            panel.style.display = 'none';
        };
    }
}

function showRightPanel() {
  let panel = document.getElementById('right-panel');
  if (panel) {
      panel.style.display = "flex";
      panel.animate([
          { opacity: 0, transform: 'translateX(40px)' },
          { opacity: 1, transform: 'translateX(0px)' }
      ], {
          duration: 120,
          fill: 'forwards',
          easing: 'ease-in-out'
      });
  }
}

function hideRightPanel() {
    let panel = document.getElementById('right-panel');
    if (panel) {
        const hideAnimation = panel.animate([
            { opacity: 1, transform: 'translateX(0px)' },
            { opacity: 0, transform: 'translateX(40px)' }
        ], {
            duration: 120,
            fill: 'forwards',
            easing: 'ease-in-out'
        });

        // Hide panel after animation completes
        hideAnimation.onfinish = () => {
            panel.style.display = 'none';
        };
    }
}

function initializeToastNotifications() {
  console.log("Initializing toast notifications");
  const button = document.getElementById("button-show-notification");
  const toast1 = document.getElementById("toast-1");
  const toast2 = document.getElementById("toast-2");

  button.addEventListener("click", () => {
    // Проверяем текущее состояние toast1
    const toast1Display = window.getComputedStyle(toast1).display;

    if (toast1Display === "none") {
        // Если toast1 скрыт (display: none), показываем его
        console.log("Showing toast-1");
        toast1.style.display = "flex"; // Делаем элемент видимым
        toast1.animate(
            [
                { opacity: 0, transform: 'translateY(-20px)' }, // Начальное состояние
                { opacity: 1, transform: 'translateY(0px)' }   // Конечное состояние
            ],
            {
                duration: 120, // Длительность анимации
                fill: 'forwards', // Сохраняем конечное состояние
                easing: 'ease-in-out' // Плавность анимации
            }
        );
    } else if (toast1Display === "flex") {
        // Если toast1 уже видим (display: flex), показываем toast2 и перемещаем toast1
        console.log("Showing toast-2 and moving toast-1");

        // Показываем toast2
        toast2.style.display = "flex"; // Устанавливаем display: flex
        toast2.animate(
            [
                { height: '0px', opacity: 0, transform: 'translateY(-20px)' }, // Начальное состояние
                { height: '158px', opacity: 1, transform: 'translateY(0px)' }   // Конечное состояние
            ],
            {
                duration: 120, // Длительность анимации
                fill: 'forwards', // Сохраняем конечное состояние
                easing: 'ease-in-out' // Плавность анимации
            }
        );

    } else {
        console.error("Unexpected display value for toast1:", toast1Display);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeToastNotifications(); // Регистрируем обработчик события при загрузке страницы
});