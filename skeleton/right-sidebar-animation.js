document.addEventListener("DOMContentLoaded", () => {
	// Получаем элемент правой боковой панели
	const rightSidebar = document.getElementById("right-sidebar-summoner");

	// Функция для анимации правой боковой панели
	const animateRightSidebar = (element) => {
		// Анимация при наведении мыши
		element.addEventListener("mouseenter", () => {
			element.animate(
				[
					{ backgroundPositionX: "100%" },
					{ backgroundPositionX: "50%" }
				],
				{ duration: 120, easing: "ease-in-out", fill: "forwards" }
			);
		});

		// Анимация при уходе мыши
		element.addEventListener("mouseleave", () => {
			element.animate(
				[
					{ backgroundPositionX: "50%" },
					{ backgroundPositionX: "100%" }
				],
				{ duration: 120, easing: "ease-in-out", fill: "forwards" }
			);
		});

		// Анимация при нажатии мыши
		element.addEventListener("mousedown", () => {
			element.animate(
				[
					{ backgroundPositionX: "50%" },
					{ backgroundPositionX: "0%" }
				],
				{ duration: 120, easing: "ease-in-out", fill: "forwards" }
			);
		});

		// Анимация при отпускании мыши
		element.addEventListener("mouseup", () => {
			element.animate(
				[
					{ backgroundPositionX: "0%" },
					{ backgroundPositionX: "50%" }
				],
				{ 
					duration: 120, 
					delay: 120,
					easing: "ease-in-out", 
					fill: "forwards" 
				}
			);
		});
	};

	// Применяем анимацию к правой боковой панели
	animateRightSidebar(rightSidebar);
});
