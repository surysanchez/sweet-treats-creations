// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from "./send-request";
const BASE_URL = "/api/treats";

export function getAllTreats() {
  return sendRequest(`${BASE_URL}`);
}
export async function createTreat(treat) {
  return sendRequest(`${BASE_URL}`, "POST", treat);
}

export function getTreatById(treatId) {
  return sendRequest(`${BASE_URL}/${treatId}`);
}

export async function deleteTreat(treatId) {
  return sendRequest(`${BASE_URL}/${treatId}`, "DELETE");
}

export async function updateTreat(treatId, treat) {
  console.log(treat);
  return sendRequest(`${BASE_URL}/${treatId.id}`, "PUT", treat);
}

// This function is never actually used in SEI CAFE,
// it's only provided as an example of RESTful routing, etc.
// For example, you had a <MoviesDetailPage> component
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
