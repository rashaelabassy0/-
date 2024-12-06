// Array to hold selected items and their prices
let total = 0;

// Function to add an item's price to the total
function addItem(price) {
    total += price;
    updateTotal();
}

// Function to update the total display
function updateTotal() {
    const totalElement = document.getElementById('total-price');
    totalElement.textContent = Total: $${total.toFixed(2)};
}

// Add event listeners to menu items
document.querySelectorAll('.menu-item button').forEach(button => {
    button.addEventListener('click', () => {
        const price = parseFloat(button.getAttribute('data-price'));
        addItem(price);
    });
});