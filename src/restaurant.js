function createRestaurant(resName) {
  let Restaurant = {
    name: resName,
    menus: {
      breakfast:[],
      lunch:[],
      dinner:[],
    }
  }
  return Restaurant 
}

function addMenuItem(resObj, item) {
  let x = item.type
  if (resObj.menus[x].includes(item) === false) {
    resObj.menus[x].push(item)
  }
}

function removeMenuItem(resObj, itemName, itemType) {
  for(i = 0; i < resObj.menus[itemType].length; i++) {
    if (resObj.menus[itemType][i].name === itemName){
      resObj.menus[itemType].splice(i,1)
      return (`No one is eating our ${itemName} - it has been removed from the ${itemType} menu!`)
  } 
}
return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}