document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('wallet');

    selectElement.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        const iconUrl = selectedOption.getAttribute('data-icon');

        if (iconUrl) {
            // Add custom styling to display the icon
            selectedOption.style.backgroundImage = `url(${iconUrl})`;
        }
    });
});
