// Initialize widget with data-stream functionality
function initWidgetDataStream(widgetElement, type) {
    switch(type) {
        case 'switch':
            const checkbox = widgetElement.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', () => {
                const value = checkbox.checked ? 1 : 0;
                sendDataToBackend(type, value);
            });
            break;
        case 'slider':
            const slider = widgetElement.querySelector('input[type="range"]');
            const display = widgetElement.querySelector('.slider-value');
            slider.addEventListener('input', () => {
                display.textContent = slider.value + '%';
                sendDataToBackend(type, slider.value);
            });
            break;
        // handle button, graph, gauge, display...
    }
}

// Example sendData function
function sendDataToBackend(widgetType, value) {
    fetch('http://localhost:8080/api/widget-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ widgetType, value, userId: 1 })
    }).then(res => res.json()).then(data => console.log('Data sent:', data));
}
