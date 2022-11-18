const user = {
    name: "Elena",
    age: 25
}

//приватная переменная не экспортируется
const user2 = {
    name: "Igor"
}


module.exports = {
    user: user,
    sayHello: () => {
        console.log('Hello')
    }
}
