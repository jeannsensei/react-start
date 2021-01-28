const axios = require('axios')

export function getTodos() {
    // Make a request for a user with a given ID
    return axios.get('https://jsonplaceholder.typicode.com/todos/')
}

export function doSomething(number) {
    console.log(number)
    return number + 1000
}
