document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.period-tab');
    const summary = document.querySelector('#period-summary');

    const render = (period) => {
        const data = getDiveCleanData();
        const now = new Date();
        const dives = data.dives.filter((dive) => {
            const date = new Date(dive.date);

            return period === 'year'
                ? date.getFullYear() === now.getFullYear()
                : date.getMonth() === now.getMonth()
                    && date.getFullYear() === now.getFullYear();
        });
        const weight = dives.reduce(
            (sum, dive) => sum + Number(dive.weight || 0),
            0
        );

        summary.innerHTML = `
            <strong>${weight.toFixed(1)} kg</strong>
            <span>${dives.length} dive${dives.length === 1 ? '' : 's'} recorded</span>
        `;
    };

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((item) => item.classList.remove('active'));
            tab.classList.add('active');
            render(tab.dataset.period);
        });
    });

    render('month');
});
