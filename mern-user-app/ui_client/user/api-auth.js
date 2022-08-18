import { baseUrl } from "./constants";
import { signinUrl } from "./constants";
import { signoutUrl } from "./constants";

const signin = async (user) => {
    try {
        let response = await fetch(`${baseUrl}/${signinUrl}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(user)
        })
        return await response.json();
    } catch (err) {
        console.log(err)
    }
}

const signout = async () => {
    try {
        let response = await fetch(`${baseUrl}/${signoutUrl}`, {
            method: 'GET'
        })
        return await response.json();
    } catch (err) {
        console.log(err)
    }
}

export { signin, signout };