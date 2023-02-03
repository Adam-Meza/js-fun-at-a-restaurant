function nameMenuItem(name = "Lasagna") {
  return `Delicious ${name}`
}

function createMenuItem(itemName, itemPrice, itemType) {
  let menuItem = {
    name: itemName,
    price: itemPrice,
    type: itemType,
  }
  return menuItem
}

function addIngredients(ingredient, ingredientArray) {
  if (ingredientArray.includes(ingredient) === false) {
    return ingredientArray.push(ingredient)
  }
}

function formatPrice(initialPrice) {
  let formattedPrice = "$" + `${initialPrice}`
  return formattedPrice
} 

function decreasePrice(initialPrice) {
  let newPrice = initialPrice * .90
  return newPrice
}

function createRecipe(itemName, itemIngredients, itemType) {
  let recipe = {
    title: itemName,
    ingredients: itemIngredients,
    type: itemType
  }
  return recipe
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


