//01 - start

import axios from 'axios'

export const api = axios.create({
    baseURL: "http://localhost:3333"
})

//api will act as the base url need in the code, so to work i just need import this and write "api.get('/users/:id')"

//01 - END