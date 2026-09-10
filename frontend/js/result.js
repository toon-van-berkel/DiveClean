document.addEventListener('DOMContentLoaded', () => {
    const data = getDiveCleanData();
    const pendingDive = data.pendingDive || {
        duration: '00:00',
        date: new Date().toISOString()
    };
    const duration = pendingDive.duration;
    const minutes = Number(duration.split(':')[0]) || 0;
    const seconds = Number(duration.split(':')[1]) || 0;
    const points = Math.max(10, Math.floor((minutes * 60 + seconds) / 60) * 10);

    document.querySelector('#dive-duration').textContent = duration;
    document.querySelector('#dive-points').textContent = `+${points}`;

    document.querySelector('#save-dive').addEventListener('click', () => {
        data.dives.push({
            ...pendingDive,
            points,
            weight: 0
        });

        delete data.pendingDive;
        saveDiveCleanData(data);
        window.location.href = './impact.html';
    });
});
