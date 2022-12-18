import sendRequest from "./send-request";
const BASE_URL = '/api/records';


export function searchAPI(search) {
  return sendRequest(`${BASE_URL}/records`, 'POST', search)
}


export function getItemDetail(id) {
  return sendRequest(`${BASE_URL}/detail?q=${id}`)
}

export function getInventory() {
  return sendRequest(`${BASE_URL}`)
}