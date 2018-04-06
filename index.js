'use strict';
// USER STORY 1: Shopping list should be rendered to page
const STORE = [
  {name: 'apples', checked: false},
  {name: 'oranges', checked: false},
  {name: 'milk', checked: true},
  {name: 'bread', checked: false}
];
// Creates an html item
const createHTMLItem = (item, index) => `
  <li class="js-item-index-element" data-item-index="${index}">
    <span class="shopping-item js-shopping-item ${item.checked ? 'shopping-item__checked' : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
  </li>
`;
// Creates an html item for each item in the STORE
const createHTMLList = (database) => database.map((item, index) => createHTMLItem(item, index)).join('');
// Renders shopping list to the DOM
const renderShoppingList = () => {
  console.log('`renderShoppingList` works like a charm');
  $('.js-shopping-list').html(createHTMLList(STORE));
};

// USER STORY 2: User should be able to add item to shopping list
const handleAddingItems = () => {
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    const newItem = $('.js-shopping-list-entry').val();
    STORE.push({name: newItem, checked: false});
    console.log(newItem);
    renderShoppingList();
  });
  console.log('`handleAddingItems` works like a charm');
};
// USER STORY 3: User should be able to check items on the list &
// USER STORY 4: User should be able to delete items from the list
// Get index of checked or deleted item
const getIndexOfItem = (event) => $(event.target).closest('.js-item-index-element').data('itemIndex');
// 
const checkOrDeleteItem = (typeOfButton) => {
  $('.shopping-item-controls').on('click', typeOfButton, (event) => {
    let index = (getIndexOfItem(event));
    STORE[index].checked = !STORE[index].checked;
    renderShoppingList();
  });
};
const handleCheckingItems = () => console.log('`handleCheckingItems` works like a charm');

// USER STORY 4: User should be able to delete items from the list
const handleDeletingItems = () => console.log('`handleDeletingItems` works like a charm');

// handle shopping list
const handleShoppingList = () => {
  renderShoppingList();
  handleAddingItems();
  handleCheckingItems();
  handleDeletingItems();
  checkOrDeleteItem('.js-item-toggle');
};

// call handle when DOM is ready
$(handleShoppingList);