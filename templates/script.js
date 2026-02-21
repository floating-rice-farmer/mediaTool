function showLoading(event) {
    const dlBtn = document.getElementById('dl-btn');
    const statusMsg = document.getElementById('status');
    const urlInput = document.querySelector('input[name="url"]');

    if (!urlInput.value.includes('http')) {
        alert("Please enter a valid URL");
        event.preventDefault(); 
        return;
    }

    dlBtn.disabled = true;
    dlBtn.innerText = 'Processing...';
    dlBtn.style.opacity = '0.7';
    dlBtn.style.cursor = 'not-allowed';

    if (statusMsg) {
        statusMsg.style.display = 'block';
        statusMsg.innerText = 'Connecting to server...';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', showLoading);
});