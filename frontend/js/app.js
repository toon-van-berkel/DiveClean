const STORAGE_KEY = 'diveclean-data';

function getDiveCleanData() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
            dives: [],
            reports: []
        };
    } catch {
        return { dives: [], reports: [] };
    }
}

function saveDiveCleanData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function renderDashboard() {
    const data = getDiveCleanData();
    const weight = data.dives.reduce(
        (sum, dive) => sum + Number(dive.weight || 0),
        0
    );

    document.querySelectorAll('#total-waste, #impact-total-waste').forEach((element) => {
        element.textContent = `${weight.toFixed(1)} kg`;
    });

    document.querySelectorAll('#total-dives, #impact-total-dives').forEach((element) => {
        element.textContent = data.dives.length;
    });
}

document.addEventListener('DOMContentLoaded', renderDashboard);
