const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
  ];


function colorFilter(array, color){
    for(item of array){
        if(item.favoriteColor === color){
            console.log(item.firstName + " " + item.lastName)
    }
}
}
colorFilter(users, "Blue")

function filter(array, key, value){
    for(item of array){
        if(item[key] === value){
            console.log(item.firstName )
        }
    }
}
filter(users, "favoriteAnimal", "Elephant")
// console.log(users)

//PURE FUNCTIONS

function filters(collection, cb){
    const newCollection = []
    for(const item of collection){
        if(cb(item)){
           newCollection.push(item.firstName)
        }
    }
 return newCollection
}

const filterRed = filters(users,function(item){
    return item.favoriteColor === "Red" && item.favoriteAnimal === "Jaguar"
})

console.log(filterRed.join(","));