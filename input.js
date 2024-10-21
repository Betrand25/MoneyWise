document.addEventListener("DOMContentLoaded", function () {
    validateInputs();
});

function validateInputs() {
    const nominalBudget = document.getElementById("nominalBudget").value;
    const startDate = document.getElementById("startDate").value;
    const selectedCategory = document.getElementById("selectedCategory").textContent;

    const saveButton = document.getElementById("saveButton");
    if (nominalBudget > 0 && startDate && (selectedCategory === 'Income' || selectedCategory === 'Outcome' || selectedCategory === 'Basic Salary' || selectedCategory === 'Salary Benefit' || selectedCategory === 'Entertainment')) {
        saveButton.disabled = false;
    } else {
        saveButton.disabled = true;
    }
}

function toggleCategoryDropdown() {
    const dropdown = document.getElementById("categoryDropdown");
    dropdown.classList.toggle("show");
}

function selectCategory(category) {
    const selectedCategory = document.getElementById("selectedCategory");
    selectedCategory.textContent = category;
    
    // Tampilkan atau sembunyikan opsi tambahan
    const additionalOptions = document.getElementById("additionalOptions");
    if (category === 'Income') {
        additionalOptions.style.display = 'block';
    } else {
        additionalOptions.style.display = 'none';
    }

    validateInputs();
}

function saveBudget() {
    const nominalBudget = document.getElementById("nominalBudget").value;
    const startDate = document.getElementById("startDate").value;
    const selectedCategory = document.getElementById("selectedCategory").textContent;

    // Save the data (implement saving logic here)
    console.log("Nominal Budget:", nominalBudget);
    console.log("Start Date:", startDate);
    console.log("Selected Category:", selectedCategory);

    // Redirect to Budget.html
    window.location.href = "Budget.html";
}

window.onclick = function (event) {
    if (!event.target.matches('#categoryMenu')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
