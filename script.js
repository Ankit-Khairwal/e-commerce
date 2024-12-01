const cartItems = [];
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

// Add to Cart Button Event
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.closest(".product");
        const id = product.getAttribute("data-id");
        const name = product.getAttribute("data-name");
        const price = parseFloat(product.getAttribute("data-price"));

        const existingItem = cartItems.find((item) => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({ id, name, price, quantity: 1 });
        }

        updateCart();
    });
});

// Update Cart Function
function updateCart() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cartItems.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItemsContainer.appendChild(itemElement);

        total += item.price * item.quantity;
    });

    totalPriceElement.textContent = total.toFixed(2);
}
