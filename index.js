import config from "./config.js";

export function savePost(post){
    return fetch(`${config.endpoint}/customers`,{
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json());
}

export function getPost(post){
    return fetch(`${config.endpoint}/customers`,{
        method: "GET"
    })
    .then(customers => customers.json());
}

export function deletePost(id){
    return fetch(`${config.endpoint}/customers/${id}`,{
    method: "DELETE",
    })
    .then(res => res.json());
}
