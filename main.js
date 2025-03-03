document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const totalPriceElement = document.getElementById('total-price');
    
    const prices = {
        '1': 10.00,
        '2': 18.00,
        '3': 24.00
    };

    function updateTotal(units) {
        totalPriceElement.textContent = `$${prices[units].toFixed(2)} USD`;
    }

    function showUnitSelections(selectedOption) {
        // Hide all unit selections first
        document.querySelectorAll('.unit-selections').forEach(selection => {
            selection.style.display = 'none';
        });

        // Show selections for the selected option
        const selectedSelections = selectedOption.querySelector('.unit-selections');
        if (selectedSelections) {
            selectedSelections.style.display = 'block';
        }
    }

    radioButtons.forEach(radio => {
        radio.addEventListener('change', (e) => {
            updateTotal(e.target.value);
            
            // Get the parent pricing-option div
            const selectedOption = e.target.closest('.pricing-option');
            if (selectedOption) {
                showUnitSelections(selectedOption);
            }
        });
    });

    // Initialize with default selection
    const defaultSelection = document.querySelector('input[type="radio"]:checked');
    if (defaultSelection) {
        updateTotal(defaultSelection.value);
        const selectedOption = defaultSelection.closest('.pricing-option');
        if (selectedOption) {
            showUnitSelections(selectedOption);
        }
    }
});
