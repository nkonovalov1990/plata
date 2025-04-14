function HideProductsList(){
    let productsList = document.getElementById('products-list');

    let productsListAnimation = productsList.animate([
        { opacity: 1, transform: 'translateX(0px)' },
        { opacity: 0, transform: 'translateX(-20px)' }
    ], {
        duration: 133,
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
              duration: 133,
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
              duration: 133,
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
      duration: 133,
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
            duration: 133,
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
      duration: 133,
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
            { opacity: 0, transform: 'translateX(-40px)' },
            { opacity: 1, transform: 'translateX(0px)' }
        ], {
            duration: 133,
            fill: 'forwards',
            easing: 'ease-in-out'
        });
    }  
  }, 133);
}

function hideLeftPanel() {
    let panel = document.getElementById('left-panel');
    if (panel) {
        const hideAnimation = panel.animate([
            { opacity: 1, transform: 'translateX(0px)' },
            { opacity: 0, transform: 'translateX(-40px)' }
        ], {
            duration: 133,
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
          duration: 133,
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
            duration: 133,
            fill: 'forwards',
            easing: 'ease-in-out'
        });

        // Hide panel after animation completes
        hideAnimation.onfinish = () => {
            panel.style.display = 'none';
        };
    }
}

document.addEventListener('DOMContentLoaded', () => {
  const buttonShowNotification = document.getElementById('button-show-notification');

  const toast1 = document.getElementById('toast-1');
  const toast1parent = toast1.parentElement;
  const toast1Height = toast1.offsetHeight;
  console.log(`toast-1: ${toast1Height}px`);

  const toast2 = document.getElementById('toast-2');
  const toast2parent = toast2.parentElement;
  const toast2Height = toast2.offsetHeight;
  console.log(`toast-2: ${toast2Height}px`);

  buttonShowNotification.addEventListener('click', () => {

    if (window.getComputedStyle(toast1).visibility === 'hidden') {
      
      toast1parent.animate(
        [
          { height: '0px' },
          { height: `${toast1Height}px` }
        ],
        {
          duration: 133,
          fill: 'forwards',
          easing: 'ease-in-out'
        }
      );
    
      toast1parent.animate(
        [
          { transform: 'translateY(-16px)' },
          { transform: 'translateY(0px)' }
        ],
        {
          delay: 133,
          duration: 133,
          fill: 'forwards',
          easing: 'ease-in-out'
        }
      );
    
      toast1.style.visibility = 'visible';
    
      toast1.animate(
        [
          { opacity: 0 },
          { opacity: 1 }
        ],
        {
          delay: 133,
          duration: 133,
          fill: 'forwards',
          easing: 'ease-in-out'
        }
      );
      
    }
    else if (window.getComputedStyle(toast1).visibility === 'visible' && window.getComputedStyle(toast2).visibility == 'hidden') {
      
      toast2parent.animate(
        [
          { height: '0px' },
          { height: `${toast2Height +16}px` }
        ],
        {
          duration: 133,
          fill: 'forwards',
          easing: 'ease-in-out'
        }
      );
    
      toast2parent.animate(
        [
          { transform: 'translateY(-16px)' },
          { transform: 'translateY(0px)' }
        ],
        {
          delay: 100,
          duration: 133,
          fill: 'forwards',
          easing: 'ease-in-out'
        }
      );
    
      toast2.style.visibility = 'visible';
    
      toast2.animate(
        [
          { opacity: 0 },
          { opacity: 1 }
        ],
        {
          delay: 100,
          duration: 133,
          fill: 'forwards',
          easing: 'ease-in-out'
        }
      );
    }

  });

});

function hideToast(toastId) {

  const toast = document.getElementById(toastId);
  const toastParent = toast.parentElement;
  const toastHeight = toast.offsetHeight;

  toastParent.animate(
    [
      { transform: 'translateY(0px)' },
      { transform: 'translateY(-16px)' }
    ],
    {
      duration: 133,
      fill: 'forwards',
      easing: 'ease-in-out'
    }
  );

  toast.animate(
    [
      { opacity: 1 },
      { opacity: 0 }
    ],
    {
      duration: 133,
      fill: 'forwards',
      easing: 'ease-in-out'
    }
  );

  const hideAnimation = toastParent.animate(
    [
      { height: `${toastHeight + 16}px` },
      { height: '0px' }
    ],
    {
      delay: 133,
      duration: 133,
      fill: 'forwards',
      easing: 'ease-in-out'
    }
  );

  // Скрываем тост после завершения анимации
  hideAnimation.onfinish = () => {
    toast.style.visibility = 'hidden';
    toast.style.opacity = '0';
    console.log(`Toast ${toastId} visibility set to: ${toast.style.visibility}`);
  };

}

document.addEventListener('DOMContentLoaded', () => {
  const closeButtons = document.querySelectorAll('.toast-close-button');

  closeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const toast = event.target.closest('.toast');
      if (toast) {
        hideToast(toast.id);
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const closeButtons = document.querySelectorAll('.toast-close-button');
  closeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const toast = event.target.closest('.toast');
      if (toast) {
        hideToast(toast.id);
      }
    });
  });
});
