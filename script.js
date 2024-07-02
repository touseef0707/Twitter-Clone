document.getElementById('search-container').addEventListener('click', function(event) {
    // Prevent the input from receiving focus
    event.preventDefault();
    // Add focus style to the div
    this.classList.add('focus');
});

function autoExpand(element) {
    element.style.height = 'auto'; // Reset height
    element.style.height = element.scrollHeight + 'px'; // Set new height
}

// Initialize auto-expansion for the textarea on page load
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('tweetInput');
    autoExpand(textarea);
});