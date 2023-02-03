function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3){
    deliveryOrders.push(order)}
  return deliveryOrders
}

function refundOrder(orderToRefund, deliveryOrders) {
  for (i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderToRefund) {
      deliveryOrders = deliveryOrders.splice(i,1)
    } 
  }
  return deliveryOrders
}

function listItems(order) {
  let list = ""
  for (i = 0; i < order.length; i++) {
    list = list + `${order[i].item}` + ", "
  }
  return list.slice(0,(list.length - 2))
}

function searchOrder(order, searchItem){
  for (i = 0; i< order.length; i++){
    if (order[i].item === searchItem){
      return true
    } 
  }
  
  return false
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}