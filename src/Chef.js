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

  checkForFood(item){
    let x = item.type
      for (let i = 0; i< this.restaurant.menus[x].length; i++){

      // if (this.restaurant.menus[x][i].type.includes(item)){}
      // deeply confused by this. it works with or without the conditional. feels like i just lucky? what it is im not understanding? it doesn't work when I try to add the Affimitive return into it. 

      return `Yes, we're serving ${item.name} today!`
    } 
    return `Sorry, we aren't serving ${item.name} today.`
  } 

}

module.exports = Chef;