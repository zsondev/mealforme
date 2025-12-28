'use strict'

// Utility functions

/**
 * Gets the list number of a newly added ingredient
 * @param {Object} ingredientList The list of ingredients
 * @returns {number} The number of the new ingredient in the list
 * @example
 * getIngredientNumber(['cheese', 'ham']); // returns 3
 */
function getIngredientNumber(ingredientList) {
    return ingredientList.children.length + 1;
}

// Event handlers

/**
 * Handle what happens when the Add Ingredient button is clicked
 * @param {Object} event The event object passed to the handler
 */
function handleAddIngredient(event) {
    const ingredientList = document.querySelector('[data-ingredients]');
    const ingredientNumber = getIngredientNumber(ingredientList);
    const ingredientId = 'ingredient-' + ingredientNumber;

    // Construct new HTML elements to add to the UI
    const inputGroup = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    // Configure inputGroup element
    inputGroup.classList.add('input-group');

    // Configure label element
    label.textContent = 'Ingredient ' + ingredientNumber;
    label.setAttribute('for', ingredientId);

    // Configure input element
    input.setAttribute('type', 'text');
    input.id = ingredientId;
    input.name = ingredientId;

    // Append elements to UI
    inputGroup.appendChild(label);
    inputGroup.appendChild(input);
    ingredientList.appendChild(inputGroup);
}

// Start application

/**
 * Register event handlers to their respective DOM elements
 */
function registerEventListeners() {
    const addIngredientButton = document.querySelector('[data-add-ingredient]');

    addIngredientButton.addEventListener('click', handleAddIngredient);
}

/**
 * Start the application
 */
function init() {
    registerEventListeners();
}

init();