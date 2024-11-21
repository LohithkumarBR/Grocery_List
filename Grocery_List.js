let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryListContainer = document.getElementById("groceryListContainer");
groceryListContainer.classList.add("grocery-list-container");

let headingEle = document.createElement("h1");
headingEle.textContent = "Grocery List";
headingEle.classList.add("grocery-list-heading");
groceryListContainer.appendChild(headingEle);

let listItemsContainerEl = document.createElement("ul");
listItemsContainerEl.classList.add("list-items-container");
groceryListContainer.appendChild(listItemsContainerEl);

for (let groceryItem of groceryList) {
    let listItemEl = document.createElement("li");
    listItemEl.textContent = groceryItem;
    listItemsContainerEl.appendChild(listItemEl);
}