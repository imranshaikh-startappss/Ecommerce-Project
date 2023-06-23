import axios from "axios";

export const intansce=axios.create({
    baseURL:"https://649177ad2f2c7ee6c2c844a9.mockapi.io",
    timeout:"2000",
    headers:{
        "content-type":"application/json"
    },
})