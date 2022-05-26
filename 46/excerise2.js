import fetch from "node-fetch";

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

function loadJson(url) {
    return fetch(url) 
}

async function demoGithubUser(id) {
    try {
        let name = id || "katl13145";
        const response = await loadJson(`https://api.github.com/users/${name}`);
        if (response.status !== 200) {
            throw new HttpError(response);
        }
        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.error(e.response.status);
        if (e instanceof HttpError && e.response.status === 404) {
            demoGithubUser('katl1314');
        }
    }
}

demoGithubUser();
