console.log("====Module 3 Week 2====")
console.log("--------Task 1---------")
//Here we need to create an array with objects inside.
const products = [
    {id:123, name:"Shirt", price:5000},
    {id:234, name:"Pants", price:10000},
    {id:345, name:"Shoes", price:30000},
];

console.log(products);
console.log("======================")

console.log("-------Task 2---------")
//Use set to organize the number list with no numbers repeated
const list = [1,1,2,3,4,5,5,8,3]

let mySet = new Set(list);
console.log(mySet);

//Here we use the method .add in order to insert another number into the list
mySet.add(10);
console.log(mySet);

//Here we use the method .has to validate if we have the number
const searchNumber = mySet.has(4);
console.log(`Is there any number 4 in the list? ${searchNumber}`)

//Here we use the method .delete in order to eliminate an specific number
mySet.delete(2)
console.log(mySet);

//Here this for... of loop is being used to iterate each element on the list.
for (iterate of mySet){
    console.log(iterate);
}

console.log("-------Task 3---------");
//In this task we are implementing the use of Map, that is a method created for objects, in order to control efficiently the data. 
const productsFeatures = products.map(product => [product.id, product.name, product.price]);
console.log(productsFeatures);


console.log("------Task 4--------");
//In this section we will use a method to iterate and print de data on the console.
for (let object of products){
    console.log("----Checking the products----");
    //Here we use for...in to check the features of the products(objets).
    for (let key in object){
        console.log(`${key}: ${object[key]}`);
    }
}

console.log("-----Checking the ordered list-----")
for (let iterator of mySet){
    console.log(iterator);
}
console.log("-----------------------------")
//LETS DO THE FINAL BOSS FOR .each.

products.forEach((product)=>{
    console.log(`Id of product = ${product.id}`)
    console.log(`Name = ${product.name} Price = ${product.price}`)
})

console.log("------Task 5-----")
//Validation througt conditionals if.

for (const product of products){
    if (!product.id || product.name==" " || product.price < 0){
        console.log("There was an error on the product list.")
    }
    else{
        console.log(`${product.id} | ${product.name} | ${product.price} =  valid ✅`)
    }
}


console.log("\n-------New validation with Map------\n")
//Now we use Map.

const newProducts = [
    //We map the original array to update or transform the rxisting data.
    ...products.map(product => ({ ...product, status: 'Active'})),
    //We add the new object at the end.
    {id:456, name:'socks', price:-3000, status: 'Inactive'}   
];
console.log(newProducts);

console.log("\n------Validating clone of map------")

for (const productAdded of newProducts){
    if (!productAdded.id || productAdded.name==" " || productAdded.price < 0){
        console.log(`${productAdded.id} |There was an error with the product.❌`)
    }
    else{
        console.log(`${productAdded.id} | ${productAdded.name} | ${productAdded.price} =  valid ✅`)
    }
}

    


    

    








