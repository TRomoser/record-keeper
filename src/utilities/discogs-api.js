import sendRequest from "./send-request";
const BASE_URL = 'http://api.discogs.com/database/';


export function searchItems(search) {
  return sendRequest(`${BASE_URL}/search?q=${search}`)
}

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
  }

export async function create(record) {
    return sendRequest(BASE_URL, "POST", record);
}
export async function deleteNote(id) {
    return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}
export async function updateNote(id, recordFormData) {
    return sendRequest(`${BASE_URL}/update/${id}`, "PUT", recordFormData);
}