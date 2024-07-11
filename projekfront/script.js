// Function to hide the spinner
function hideSpinner() {
    document.getElementById('spinner').classList.add('hidden');
}

// Call this function when the loading is complete
hideSpinner();

setTimeout(hideSpinner, 3000);
