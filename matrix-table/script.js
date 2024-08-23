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

    const tbody = document.querySelector('.skills-table tbody');

    categories.forEach((category) => {
        fetch(category.file)
            .then(response => response.json())
            .then(data => {
                // Добавляем строку с именем категории
                tbody.innerHTML += `
                    <tr>
                        <td class="category-header" colspan="5">${data.categories[0]}</td>
                    </tr>
                `;

                // Добавляем строку заголовков (Skill, Junior, Middle, Senior, Lead)
                tbody.innerHTML += `
                    <tr class="category-header-row">
                        <th class="heading-xxs">Skill</th>
                        <th class="heading-xxs">Junior</th>
                        <th class="heading-xxs">Middle</th>
                        <th class="heading-xxs">Senior</th>
                        <th class="heading-xxs">Lead</th>
                    </tr>
                `;

                // Добавляем строки с навыками и уровнями
                data.skills.forEach((skill, skillIndex) => {
                    let row = `<tr>
                        <td class="heading-xxs">${skill}</td>`;
                    data.levels.forEach(level => {
                        row += `<td class="skill-description">${level.values[skillIndex]}</td>`;
                    });
                    row += `</tr>`;
                    tbody.innerHTML += row;
                });
            })
            .catch(error => console.error('Ошибка загрузки данных:', error));
    });
});

document.addEventListener("scroll", function() {
    const tableWrapper = document.querySelector(".table-wrapper");

    if (window.scrollY >= 20) {
        tableWrapper.style.overflow = "visible";
    } else {
        tableWrapper.style.overflow = "hidden";
    }
});