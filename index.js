document.addEventListener('DOMContentLoaded', function() {
    // Update the current year in the footer.
    updateFooterYear();
});


function updateFooterYear() {
    var currentYear = new Date().getFullYear();
    var footerYear = document.getElementById('current-year-span')
    footerYear.textContent = currentYear;
}