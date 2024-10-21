document.getElementById('categoryMenu').addEventListener('click', function() {
            document.getElementById('categoryDropdown').classList.toggle('show');
        });

        window.onclick = function(event) {
            if (!event.target.matches('#categoryMenu, #categoryMenu *')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                for (var i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }

        document.getElementById('startDate').setAttribute('min', '2023-01-01');
        document.getElementById('startDate').setAttribute('max', '2023-12-31');
        document.getElementById('endDate').setAttribute('min', '2023-01-01');
        document.getElementById('endDate').setAttribute('max', '2023-12-31');

        function selectCategory(category) {
            var selectedCategory = document.getElementById('selectedCategory');
            if (category === 'Etc') {
                var userCategory = prompt('Please enter your category:');
                if (userCategory) {
                    selectedCategory.innerText = userCategory;
                } else {
                    selectedCategory.innerText = 'Etc';
                }
            } else {
                selectedCategory.innerText = category;
            }
            document.getElementById('categoryDropdown').classList.remove('show');
        }

        function saveBudget() {
            var selectedCategory = document.getElementById('selectedCategory').innerText;
            var nominalBudget = document.getElementById('nominalBudget').value;
            var startDate = document.getElementById('startDate').value;
            var endDate = document.getElementById('endDate').value;

            if (selectedCategory === 'Investation' || nominalBudget <= 0 || !startDate || !endDate) {
                alert('Please fill out all fields: Category, Nominal Budget, and Date.');
                return;
            }

            window.location.href = 'Budget.html';
        }