class Chef {
  constructor(instanceName, instanceRes) {
   this.name = instanceName
   this.restaurant = instanceRes
  }

  greetCustomer(name,isMorning){
    if (isMorning) {
      return `Good morning, ${name}!`
    }
    return `Hello, ${name}!`
  }

  checkForFood(item,){
    let x = item.type
      for (let i = 0; i< this.restaurant.menus[x].length; i++){
      if (this.restaurant.menus[x][i] === (item)){
        return `Yes, we're serving ${item.name} today!`
      }
    } 
    return `Sorry, we aren't serving ${item.name} today.`
  } 

}

module.exports = Chef;