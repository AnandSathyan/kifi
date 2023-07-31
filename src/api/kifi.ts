import { JSON_PLACEHOLDER_AUTH, JSON_PLACEHOLDER } from "../contants";
import ApiClient from "./client";
const api = new ApiClient(JSON_PLACEHOLDER_AUTH);
const apiData = new ApiClient(JSON_PLACEHOLDER);
export const AuthenticationClient = async (body: any) => {
  return api
    .post("", body)
    .then((response) => response)
    .then((data) => {
      data;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export const ApiClientData = async (header: any, body: any) => {
  return apiData
    .post(header, body)
    .then((response) => response)
    .then((data) => data)
    .catch((err) => {
      console.log(err.message);
    });
};
