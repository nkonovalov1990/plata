document.addEventListener("DOMContentLoaded", () => {
	// Получаем элемент левой боковой панели
	const leftSidebar = document.getElementById("left-sidebar-summoner");

	// Функция для анимации левой боковой панели
	const animateLeftSidebar = (element) => {
		// Анимация при наведении мыши
		element.addEventListener("mouseenter", () => {
			element.animate(
				[
					{ backgroundPositionX: "0%" },
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
					{ backgroundPositionX: "0%" }
				],
				{ duration: 120, easing: "ease-in-out", fill: "forwards" }
			);
		});

		// Анимация при нажатии мыши
		element.addEventListener("mousedown", () => {
			element.animate(
				[
					{ backgroundPositionX: "50%" },
					{ backgroundPositionX: "100%" }
				],
				{ duration: 120, easing: "ease-in-out", fill: "forwards" }
			);
		});

		// Анимация при отпускании мыши
		element.addEventListener("mouseup", () => {
			element.animate(
				[
					{ backgroundPositionX: "100%" },
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

	// Применяем анимацию к левой боковой панели
	animateLeftSidebar(leftSidebar);
});
