// Read the instructions for each of the warm up exercises carefully. This may
// seem repetitious or pedantic at first, however it's very important that you
// become comfortable with these fundamental concepts. Do not move on to
// iteration 1 until you are confident that you've completed all of iteration 0.

//------------------------- Variables -------------------------//


// Initialize three new variables, "food", "type" and "inStock", and assign values to them with
// a food's name, type and number of items in stock.
let iceCream = {
    name: "Ice Cream",
    type: "Dessert",
    inStock: 10,
}

// Reassign (not initialize) your "inStock" variable from above. We got a new shipment! Use a built in math operator to make 
// the inStock count double what it currently is.
iceCream.inStock = iceCream.inStock * 2
console.log(iceCream.inStock)


// Reassign (not initialize) your "inStock" variable from above. You got hungry and needed a snack! 
// Use a built in math operator to decrement the inStock count by 1.
iceCream.inStock = iceCream.inStock - 1
console.log(iceCream.inStock)
// Initialize a new variable "isFavorite", and assign it to a boolean value indicating
// if the food you chose is your favorite food or not
iceCream.isFavorite = true
console.log(iceCream)

// Create a new variable named "shouldOrderMore", and use a comparison operator to
// assign a boolean value to this variable. If "inStock" is less than 20, the
// variable should be true, otherwise it should be false. You MUST use a
// comparison operator.


function shouldOrderMore(food) {
    if (food.inStock < 20){
        return true
    } else {
        return false
    }
}

console.log(shouldOrderMore(iceCream))





//------------------------- Conditionals -------------------------//



// Express the following in code: If the variable "stockCount" is greater or equal to 1, log
// the statement 'I'm going to eat some [food]!', otherwise, log the statement 
// 'We need to get some more [food].'


function checkStock(food){
    if (food.inStock >= 1){
        console.log(`I'm going to eat some ${food.name}`)
    } else {
        console.log(`We need to get some ${food.name}`)
    }
}
checkStock(iceCream)

// Express the following in code: If the variable "isFavorite" is true,
// log the statement 'My favorite food is [food]!'. Otherwise, log the
// statement 'I recently ate [food]'. In either case, the value stored in
// the "food" variable should be included in the logged statement.

function checkFavorite(food) {
    if (food.isFavorite){
        console.log(`My favorite food is ${food.name}`)
    } else {
        console.log(`I recently ate ${food.name}`)
    }
}
checkFavorite(iceCream)

//------------------------- Arrays -------------------------//


// Create a new variable "vegetables" and assign it to an Array of 5 different
// vegetables, represented by their names as Strings.

let vegetables = ["carrots", "turnips", "potatoes", "limes", "tomatoes"]

// Write the code to access the 3rd element of the Array, using bracket
// notation.

console.log(vegetables[2])

// Create a new variable "fruits" and assign it to an Array of 7
// different fruits.

let fruits = ["limes", "lemons", "cherries", "beets", "ginger", "papaya", "raspberries"]

// Write the code to access the 5th element of the array, using bracket notation.
console.log(fruits[4])

//------------------------- Objects -------------------------//

// Create a new variable called "groceryStore" and assign to it an object literal with two
// keys: name, and isOpen. The value for name should the string 'King Soopers' (or your favorite grocery store), and
// the value for isOpen should be true. Which other key value pairs would make sense to add to this object?

let groceryStore = {
    name: "Supremo",
    isOpen: false,
    isClean: false,
    inViolationOfHealthDepartment: true,
    hours: {
        open: 7,
        close: 10,
    }
}


// Write the code to add the key of location, with the value of 'Denver, Colorado'. Use dot
// notation to do this. DO NOT modify your code from above.

groceryStore.location = "Denver, Colorado"
console.log(groceryStore)