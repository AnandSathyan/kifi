import { JSON_PLACEHOLDER_AUTH } from "../contants";
import { User } from "../models/user";
import ApiClient from "./client";

const api = new ApiClient(JSON_PLACEHOLDER_AUTH);

export const fetchUsers = () => {
  return api
    .get<User[]>("/User")
    .then((data) => {
      return console.log("!!!!!!!!!!!!!!!!!!!!!!!", data);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};
