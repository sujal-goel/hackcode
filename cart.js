
function searchItems() {
    const itemNameInput = document.getElementById("itemName").value;

    Papa.parse("product_details.csv", {
        download: true,
        header: true,
        complete: function(results) {
            const matchingItems = results.data.filter(item => item["Item Name"].toLowerCase().includes(itemNameInput.toLowerCase()));

            renderItems(matchingItems);
        }
    });
}

function renderItems(items) {
    const cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = "";

    items.forEach(item => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item";

        const imgSrc = `./images/${item["Category"].toLowerCase()}.png`; 

        cartItemDiv.innerHTML = `
            <img src="${imgSrc}" alt="${item["Category"]}" />
            <div class="cart-item-details">
                <h3>${item["Item Name"]}</h3>
                <p>Price: $${item["Price"]}</p>
                <p>Quantity: ${item["Quantity"]}</p>
                <button class="remove-btn" onclick="removeItem('${item["Item Name"]}')">Remove</button>
            </div>
        `;

        cartItemsContainer.appendChild(cartItemDiv);
    });
}

function removeItem(itemName) {
    console.log(`Remove ${itemName} logic to be implemented.`);
}
