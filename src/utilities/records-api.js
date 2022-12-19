import sendRequest from "./send-request";
const BASE_URL = '/api/records';


export function searchAPI(query) {
  return sendRequest(`${BASE_URL}/search?q=${query}`)
}


export function getItemDetail(id) {
  return sendRequest(`${BASE_URL}/detail?q=${id}`)
}

export function getInventory() {
  return sendRequest(`${BASE_URL}`)
}