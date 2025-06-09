if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(function(registration) {
            console.log('ServiceWorker registration successful');
        })
        .catch(function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
}

function handleSearch(event) {
    if (event.key === 'Enter') {
        const query = event.target.value.trim();
        if (query) {
            const searchUrl = `https://www.google.com/search?udm=14&num=30&q=${encodeURIComponent(query)}`;
            window.location.href = searchUrl;
        }
    }
}

function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    document.getElementById('datetime').textContent = now.toLocaleDateString('pt-PT', options);
}

setInterval(updateTime, 1000);
updateTime();
