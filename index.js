// import postDate from "./module.js";

// postDate()

import axios from "axios";
axios.post("https://reqres.in/api/users", {
    name: "morpheus",
    job: "leader"
}).then(succes => {
    console.log(succes)
}).catch(err => {
    console.log(err)
})