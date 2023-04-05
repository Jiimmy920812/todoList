
const fetchAPI = {
    async fetchAPI_Get(url , api = "/") {
        const obj = {
            method: `GET`,
            headers: { 'Content-Type': 'application/json ; charset=UTF-8', },
        }
        const res = await fetch(`${url}${api}`, obj);
        return await res.json(); 
    },
    async fetchAPI_Post(url , api = "/", data={}) {
        const obj = {
            method: `POST`,
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json ; charset=UTF-8', },
        }
        const res = await fetch(`${url}${api}`, obj);
        return await res.json(); 
    }
    

}

export default fetchAPI;

