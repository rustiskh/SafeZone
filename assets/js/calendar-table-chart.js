const dataTable = [
    {
        created_at: "2024-03-02 16:49:00",
        name: "08474",
        ref_link: "https:\/\/szmarket.ru\/r\/08474",
        ref_link_id: '1',
        all_clicks: 2,
        all_members: 1,
        all_transactions: 0,
        all_transactions_sum: 0
    },
    {
        created_at: "2024-03-14 16:33:25",
        name: "474b749e50",
        ref_link: "https:\/\/szmarket.ru\/r\/474b749e50",
        ref_link_id: '12',
        all_clicks: 0,
        all_members: 0,
        all_transactions: 0,
        all_transactions_sum: 0
    },
    {
        created_at: "2024-03-11 16:30:00",
        name: "e8feeb9224",
        ref_link: "https:\/\/szmarket.ru\/r\/e8feeb9224",
        ref_link_id: '121',
        all_clicks: 0,
        all_members: 0,
        all_transactions: 0,
        all_transactions_sum: 0
    },
    {
        created_at: "2024-03-08 16:25:10",
        name: "818ae98db2",
        ref_link: "https:\/\/szmarket.ru\/r\/818ae98db2",
        ref_link_id: '1211',
        all_clicks: 0,
        all_members: 0,
        all_transactions: 0,
        all_transactions_sum: 0
    },
    {
        created_at: "2024-03-04 16:22:55",
        name: "7df5c27f2e",
        ref_link: "https:\/\/szmarket.ru\/r\/7df5c27f2e",
        ref_link_id: '122',
        all_clicks: 0,
        all_members: 0,
        all_transactions: 0,
        all_transactions_sum: 0
    }
]

const dataGraph = [
    {
        created_at: "2024-03-05",
        sum: "4",
    },
    {
        created_at: "2024-03-15",
        sum: "5",
    },

    {
        created_at: "2024-03-10",
        sum: "10",
    },
    {
        created_at: "2024-03-20",
        sum: "20",
    },
]

window.addEventListener("DOMContentLoaded", () => {
    console.log("Файл calendar-table-chart.js подключен");

    // Формат даты - используется в календаре, в графике и таблице для отображения и фильтрации при изменении
    const dateFormat = "Y-m-d";

    // Эта функция нужна для форматирования диапазона дат перед передачей в таблицу и график - она унифицирует все значения дат 
    function formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Получение данных для таблицы и создание строк
    // Получаем ссылку на тело таблицы
    const tableBody = document.querySelector("#dataTable tbody");

    // Формирование строк таблицы из массива dataTable
    dataTable.forEach(data => {
        // Строка таблицы
        const row = document.createElement("tr");

        // Содержимое ячейки
        for (const prop in data) {
            const cell = document.createElement("td");
            cell.textContent = data[prop];

            // Добавление ячейки с ссылкой классов для рендера кнопок редактирвоания и копирования. Навесил на 2 разных класса на всякий случай
            if (prop === "ref_link") {
                cell.classList.add("edit", "copy");

                if (cell.classList.contains("copy")) {
                    const copyBtn = document.createElement("div");
                    copyBtn.classList.add("copy-btn");
                    copyBtn.innerHTML =
                        '<svg svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg" >' +
                        '<path d="M3.00196 30C2.17696 30 1.47046 29.706 0.882455 29.118C0.294455 28.53 0.000955672 27.824 0.00195567 27V6H3.00196V27H19.502V30H3.00196ZM9.00196 24C8.17696 24 7.47046 23.706 6.88246 23.118C6.29446 22.53 6.00096 21.824 6.00196 21V3C6.00196 2.175 6.29596 1.4685 6.88396 0.880502C7.47196 0.292502 8.17796 -0.000997453 9.00196 2.54669e-06H22.502C23.327 2.54669e-06 24.0335 0.294003 24.6215 0.882003C25.2095 1.47 25.503 2.176 25.502 3V21C25.502 21.825 25.208 22.5315 24.62 23.1195C24.032 23.7075 23.326 24.001 22.502 24H9.00196ZM9.00196 21H22.502V3H9.00196V21Z" fill="white" />' +
                        '</svg >';
                    cell.appendChild(copyBtn);
                }

                if (cell.classList.contains("edit")) {
                    const copyBtn = document.createElement("button");
                    copyBtn.classList.add("edit-btn");
                    copyBtn.innerHTML =
                        "Ред.";
                    cell.appendChild(copyBtn);
                }
            }

            row.appendChild(cell);
        }

        // Пушим строку в тело таблицы
        tableBody.appendChild(row);
    });



    // Копирование - Это дублирующий функционал (он ещё встречается в промокодах на страницах игр) 
    const tableContainer = document.querySelectorAll('.table');

    tableContainer.forEach(elem => {
        // Копирование - это дублирующий функционал (он ещё встречается в промокодах на страницах игр) 
        const btnCopy = elem.querySelectorAll('.copy-btn');
        let activeItem;

        btnCopy.forEach(item => {
            item.addEventListener('click', () => {
                navigator.clipboard.writeText(item.parentNode.innerText).then(
                    item.classList.add('promocode__copy_active')
                );
            });
        });

        const onChangeActiveItem = (element) => {
            if (activeItem) {
                activeItem.classList.remove('promocode__copy_active');
            }
            activeItem = element;
            element.classList.add('promocode__copy_active');
        }

        btnCopy.forEach(element => {
            element.addEventListener('click', ({ currentTarget }) => {
                onChangeActiveItem(currentTarget);
            })
        });

        // Функционал редактирования
        const btnEdit = elem.querySelectorAll('.edit-btn');

        btnEdit.forEach(item => {
            item.addEventListener('click', () => {
                console.log('Открываем модалку редактирования');
            });
        });
    });

    let table = new DataTable('#dataTable', {
        // options
        info: false,
        autoWidth: true,
        scrollX: true,
        // Оставлю здесь, чтобы не потерять - для работы с сервером - https://datatables.net/reference/option/serverSide
        // Сама дока опций библиотеки https://datatables.net/reference/option/

        language: {
            "decimal": "",
            "emptyTable": "Нет данных",
            "thousands": ",",
            "lengthMenu": "Строк на странице _MENU_",
            "loadingRecords": "Загрузка...",
            "processing": "",
            "search": "Поиск:",
            "zeroRecords": "Нет данных, удовлетворяющих указанным параметрам",
            "paginate": {
                "first": "Первая",
                "last": "Последняя",
                "next": "Следующая",
                "previous": "Предыдущая"
            },
            "aria": {
                "orderable": "Упорядочить",
                "orderableReverse": "В обратном порядке"
            }
        }
    });

    function filterTableByCalendar(selectedDates) {
        let startDate = "";
        let endDate = "";

        if (selectedDates.length === 2) {
            startDate = formatDate(selectedDates[0], dateFormat);
            endDate = formatDate(selectedDates[1], dateFormat);
        } else if (selectedDates.length === 1) {
            // если выбрана только 1 дата, а не диапазон
            startDate = endDate = formatDate(selectedDates[0], dateFormat);
        }

        console.log("Выбранный диапазон дат: ", startDate, " — ", endDate);

        table.column(0).search(function (value, index, data) {
            const date = new Date(value.split(' ')[0]);
            const startDateObj = new Date(startDate);
            const endDateObj = new Date(endDate);
            return date >= startDateObj && date <= endDateObj;
        }).draw();
    }

    let tableCalendar = flatpickr("#calendar-1", {
        "mode": "range",
        "locale": "ru",
        defaultDate: [new Date().fp_incr(-14), new Date().fp_incr(-1)], // Дата по умолчанию предыдущие 2 недели
        dateFormat: dateFormat, // Формат даты
        onChange: function (selectedDates) {
            filterTableByCalendar(selectedDates);
        },
        onReady: function (selectedDates) {
            filterTableByCalendar(selectedDates);
        },
    });



    // Сортировка массива объектов по дате (наверное ваши данные и так будут по порядку, но на всякий случай сделал сортировку)
    const dataGraphSorted = dataGraph.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dataGraphSorted.map(data => data.created_at),
            datasets: [{
                label: 'Sum',
                data: dataGraphSorted.map(data => parseInt(data.sum)),
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    offset: true
                },
                y: {
                    beginAtZero: true
                }
            },
            elements: {
                line: {
                    // Кривизна графика, если не нужна удалить elements или скорректировать tension
                    tension: 0.3
                }
            }
        },
    });

    // Календарь для графика
    let chartCalendar = flatpickr("#calendar-chart", {
        "mode": "range",
        "locale": "ru",
        defaultDate: [new Date().fp_incr(-14), new Date().fp_incr(-1)], // Дата по умолчанию предыдущие 2 недели
        dateFormat: dateFormat, // Формат даты
        onChange: function (selectedDates) {
            updateChartData(selectedDates);
        },
        onReady: function (selectedDates) {
            updateChartData(selectedDates);
        },
    });

    // Функция для обновления данных графика
    function updateChartData(selectedDates) {
        let startDate = "";
        let endDate = "";

        if (selectedDates.length === 2) {
            startDate = formatDate(selectedDates[0], dateFormat);
            endDate = formatDate(selectedDates[1], dateFormat);
        } else if (selectedDates.length === 1) {
            // Если выбрана только 1 дата, а не диапазон
            startDate = formatDate(selectedDates[0], dateFormat);
            endDate = formatDate(selectedDates[0], dateFormat); // Используем одну и ту же дату для начала и конца диапазона
        }

        // Фильтруем данные графика в соответствии с выбранным диапазоном
        const filteredData = dataGraph.filter(data => {
            const date = new Date(data.created_at);
            const startDateObj = new Date(startDate);
            const endDateObj = new Date(endDate);
            return date >= startDateObj && date <= endDateObj;
        });

        // Обновляем данные графика
        myChart.data.labels = filteredData.map(data => data.created_at);
        myChart.data.datasets[0].data = filteredData.map(data => parseInt(data.sum));

        // Обновляем график
        myChart.update();
    }
})