/*
The data is the available inventory in the store. In the store you have various products with their price and available quantity.
Based on this data, write a function to generate the total bill of a grocery list given by an user
getTotalAmount([
    { item: 'Jam - Apricot', quantity: 2 },
    { item: 'Creamers - 10%', quantity:1 },
  ]); // The result would be (94.11 * 2) + (1 * 49.54)
Please note if the user wants an quantity above what the store has. You should account for the quantity the store has. For example if the user wants 4 quantity but the store has only 2, then your calculation should only account for 2
*/
const fs = require('fs');
const path = require('path');

// ✅ Load and normalize inventory data
function getInventory() {
    const filePath = path.join('Day_6', 'store-product-list.json');

    try {
        const rawData = fs.readFileSync(filePath, 'utf-8');
        const inventory = JSON.parse(rawData);

        const normalizedInventory = [];

        for (let i = 0; i < inventory.length; i++) {
            const item = inventory[i];

            // Edge Case 1: Missing fields
            if (!item.product || !item.price || item.Quantity === undefined) {
                console.warn(`⚠️ Skipping invalid inventory entry at index ${i}:`, item);
                continue;
            }

            // Edge Case 2: Price parsing
            const priceString = item.price.toString();
            const price = parseFloat(priceString.replace(/[^0-9.]/g, ''));
            const validPrice = isNaN(price) ? 0 : price;

            // Edge Case 3: Quantity validation
            const validQuantity = typeof item.Quantity === 'number' && item.Quantity >= 0 ? item.Quantity : 0;

            normalizedInventory.push({
                name: item.product,
                price: validPrice,
                quantity: validQuantity
            });
        }

        return normalizedInventory;
    } catch (error) {
        console.error("Error loading inventory:", error.message);
        return [];
    }
}

// Calculate total bill with full validation
function getTotalAmount(groceryList) {
    const inventory = getInventory();
    let total = 0;

    // Edge Case 4: Grocery list must be an array
    if (!Array.isArray(groceryList)) {
        console.error("Grocery list must be an array.");
        return 0;
    }

    for (let i = 0; i < groceryList.length; i++) {
        const entry = groceryList[i];

        // Edge Case 5: Validate entry structure
        if (
            typeof entry !== 'object' ||
            typeof entry.item !== 'string' ||
            typeof entry.quantity !== 'number' ||
            entry.quantity <= 0 ||
            entry.item.trim() === ''
        ) {
            console.warn(`Invalid grocery entry at index ${i}:`, entry);
            continue;
        }

        // Edge Case 6: Item not found
        const storeItem = inventory.find(p => p.name === entry.item);
        if (!storeItem) {
            console.warn(`Item "${entry.item}" not found in inventory.`);
            continue;
        }

        // Edge Case 7: Out of stock
        if (storeItem.quantity === 0) {
            console.warn(`Item "${entry.item}" is out of stock.`);
            continue;
        }

        
        const qtyToCharge = Math.min(entry.quantity, storeItem.quantity);
        const itemTotal = qtyToCharge * storeItem.price;
        total += itemTotal;

        console.log(`Charging for "${entry.item}": ${qtyToCharge} x ₹${storeItem.price.toFixed(2)} = ₹${itemTotal.toFixed(2)}`);
    }

    console.log("Total bill:", total.toFixed(2));
    return total;
}


const bill = getTotalAmount([
    { item: 'Jam - Apricot', quantity: 2 },
    { item: 'Creamers - 10%', quantity: 1 },
    { item: 'Milk - Homo', quantity: 10 },        // Only 4 available
    { item: 'Invalid Item', quantity: 3 },        // Not in inventory
    { item: '', quantity: 2 },                    // Empty item name
    { item: 'Jam - Apricot', quantity: -5 },      // Negative quantity
    { item: 'Creamers - 10%', quantity: 'two' },  // Invalid quantity type
]);

console.log('Final Bill:', bill.toFixed(2));