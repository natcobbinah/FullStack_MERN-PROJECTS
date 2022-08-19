import { baseUrl } from "./constants";
import { usersUrl } from "./constants";

const fetchClient = (url) => (resource) => (method) => (body) => (headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}) => (signal) => {
    return fetch(`${url}/${resource}`, {
        method: method,
        headers: headers,
        signal: signal,
        body: body && JSON.stringify(body),
    })
}

const apiUrl = fetchClient(baseUrl);
const httpGet = 'get';
const httpPost = 'post';
const httpPut = 'put';
const httpDelete = 'delete';

const headerWithAuth = (credentials) => (
    {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
    }
)

const create_user_resource = apiUrl(usersUrl);
const create_user_action = create_user_resource(httpPost);

const list_users_resource = apiUrl(usersUrl);
const list_users_action = list_users_resource(httpGet);

const create = (body) => {
    return create_user_action(body)()()
        .then((res) => res.json())
}

const list = (signal) => {
    return list_users_action()()(signal)
        .then((res) => res.json())
}

const read = (params, credentials, signal) => {
    const read_user_resource = apiUrl(`${usersUrl}/${params.userId}`)
    return read_user_resource(httpGet)()(headerWithAuth(credentials))(signal)
        .then((res) => res.json())
}

const update = (params, credentials, user) => {
    const update_user_resource = apiUrl(`${usersUrl}/${params.userId}`)
    return update_user_resource(httpPut)(user)(headerWithAuth(credentials))()
        .then((res) => res.json())
}

const remove = (params, credentials) => {
    const remove_user_resource = apiUrl(`${usersUrl}/${params.userId}`)
    return remove_user_resource(httpDelete)()(headerWithAuth(credentials))()
        .then((res) => res.json())
}

export { create, list, read, update, remove };