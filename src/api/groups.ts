import { Group } from "../models/Group"
import axios from "axios";
import { BASE_URL } from "./base";


interface GroupRequest {
    limit?: number;
    offset?: number;
    query?: any;
    status?:
      | "all-groups"
      | "favourite"
      | "archieved";
  }
  
  interface GroupResponse {
    data : Group[];
  }
  
  
  export const fetchGroups = (
    data: GroupRequest
  ) => {
    const url = BASE_URL + "/groups";
    return axios
      .get(url, { params: data })
      .then((response) => {
        console.log("hello");
        console.log(response.data.data);
       
        return response.data.data;
      })
      .catch((e) => console.log(e));
  };