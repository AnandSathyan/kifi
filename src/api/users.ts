import { JSON_PLACEHOLDER } from "../contants";
import { User } from "../models/user";
import ApiClient from "./client";

const api = new ApiClient(JSON_PLACEHOLDER);

export const fetchUsers = () => {
  return api
    .get<User[]>("/users")
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};

