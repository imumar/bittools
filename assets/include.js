document.addEventListener("DOMContentLoaded", function() {
    fetch('/assets/all-tools.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('all-tools-container').innerHTML = data;
        });
});
