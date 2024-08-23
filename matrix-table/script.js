document.addEventListener("DOMContentLoaded", function() {
    const categories = [
        { id: 'understanding-business-block', file: 'json/understanding_business.json' },
        { id: 'ux-strategy-block', file: 'json/ux_strategy.json' },
        { id: 'research-block', file: 'json/research.json' },
        { id: 'ux-design-block', file: 'json/ux_design.json' },
        { id: 'ui-design-block', file: 'json/ui_design.json' },
        { id: 'mentorship-block', file: 'json/mentorship.json' },
        { id: 'tools-block', file: 'json/tools.json' },
        { id: 'soft-skills-block', file: 'json/soft_skills.json' }
    ];

    categories.forEach((category) => {
        fetch(category.file)
            .then(response => response.json())
            .then(data => {
                // Создаем секцию для каждой категории
                const section = document.createElement('section');
                section.className = 'table-wrapper';
                section.id = category.id;

                // Создаем таблицу внутри секции
                const table = document.createElement('table');
                table.className = 'skills-table';

                // Создаем заголовок таблицы
                let thead = `
                    <thead>
                        <tr class="category-header-row">
                            <th class="heading-xxs">${data.categories[0]}</th>
                            <th class="heading-xxs">Junior</th>
                            <th class="heading-xxs">Middle</th>
                            <th class="heading-xxs">Senior</th>
                            <th class="heading-xxs">Lead</th>
                        </tr>
                    </thead>
                `;
                table.innerHTML = thead;

                // Создаем тело таблицы
                let tbody = '<tbody>';
                data.skills.forEach((skill, skillIndex) => {
                    let row = `<tr>
                        <td class="heading-xxs">${skill}</td>`;
                    data.levels.forEach(level => {
                        row += `<td class="skill-description">${level.values[skillIndex]}</td>`;
                    });
                    row += `</tr>`;
                    tbody += row;
                });
                tbody += '</tbody>';
                table.innerHTML += tbody;

                // Добавляем таблицу в секцию
                section.appendChild(table);

                // Добавляем секцию в body
                document.body.appendChild(section);
            })
            .catch(error => console.error('Ошибка загрузки данных:', error));
    });
});

document.addEventListener("scroll", function() {
    const tableWrappers = document.querySelectorAll(".table-wrapper");

    tableWrappers.forEach(wrapper => {
        const rect = wrapper.getBoundingClientRect();

        if (rect.top <= 0) {
            wrapper.style.overflow = "visible";
        } else {
            wrapper.style.overflow = "hidden";
        }
    });
});

document.addEventListener("scroll", function() {
    const tableWrappers = document.querySelectorAll(".table-wrapper");

    tableWrappers.forEach(wrapper => {
        const headerRow = wrapper.querySelector('.category-header-row');
        const lastRow = wrapper.querySelector('.skills-table tbody tr:last-child');

        if (!headerRow || !lastRow) return;

        const headerCells = headerRow.querySelectorAll('th');
        const headerHeight = headerRow.getBoundingClientRect().height;
        const lastRowRect = lastRow.getBoundingClientRect();

        // Проверяем, насколько верхняя граница последней строки выше верхней границы окна
        const distance = lastRowRect.top - headerHeight;

        headerCells.forEach(th => {
            const currentTop = parseInt(th.style.top) || 0;

            if (distance <= 0 && distance > -56 && currentTop > -56) {
                th.style.position = 'sticky';
                th.style.top = `${distance}px`;
            } else if (distance <= -56) {
                th.style.position = 'absolute';
                th.style.top = '-56px';
            } else if (distance > -56) {
                th.style.position = 'sticky';
                th.style.top = `${Math.min(0, distance)}px`;
            }
        });
    });
});