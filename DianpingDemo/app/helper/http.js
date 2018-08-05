import axios from 'axios';

export function getRequestData(linkName) {
    let r = axios.get(linkName)
    return r;
}

export function postRequestData(linkName,param) {
    let r = axios.post(linkName,param)
    return r;
}
