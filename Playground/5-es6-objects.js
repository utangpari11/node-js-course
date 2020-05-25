//Object property shorthand

const name = 'Andrew'
const userAge = 27
const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}
//console.log(user)

//Object Destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}
// const label = produce.label
// const stock = produce.stock

//Object Destructuring Demo

/*
const {label: productLabel, stock,rating=5} = product
console.log(productLabel)
console.log(stock)
console.log(rating)
*/

//Object property shorthand
const transaction1 = (type,myProduct) =>{
    const {label,price} = myProduct
    console.log(label)
}
//Instead of above you can do it 
const transaction2 = (type,{label, stock}) =>{    
    console.log(type,label,stock)
}

transaction1('order',product)
transaction2('order',product)