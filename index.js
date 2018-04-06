'use strict';
// USER STORY 1: Shopping list should be rendered to page
const STORE = [
  {name: 'apples', checked: false},
  {name: 'oranges', checked: false},
  {name: 'milk', checked: true},
  {name: 'bread', checked: false}
];

const renderShoppingList = () => console.log('`renderShoppingList` works like a charm');

// USER STORY 2: User should be able to add item to shopping list
const handleAddingItems = () => console.log('`handleAddingItems` works like a charm');

// USER STORY 3: User should be able to check items on the list
const handleCheckingItems = () => console.log('`handleCheckingItems` works like a charm');

// USER STORY 4: User should be able to delete items from the list
const handleDeletingItems = () => console.log('`handleDeletingItems` works like a charm');

// handle shopping list
const handleShoppingList = () => {
  renderShoppingList();
  handleAddingItems();
  handleCheckingItems();
  handleDeletingItems();
};

// call handle when DOM is ready
$(handleShoppingList);