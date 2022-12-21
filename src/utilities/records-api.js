import sendRequest from "./send-request";
const BASE_URL = '/api/records';


export function searchAPI(query) {
  return sendRequest(`${BASE_URL}/search?q=${query}`);
}


export function getItemDetail(id) {
  return sendRequest(`${BASE_URL}/detail?q=${id}`);
}

export function index() {
  return sendRequest(BASE_URL);
}

export function create(newRecord) {
  return sendRequest(BASE_URL, 'POST', newRecord);
}

export function deleteRecord(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function updateRecord(id, recordData) {
  return sendRequest(`${BASE_URL}/update/${id}`, 'PUT', recordData);
}