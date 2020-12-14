import Axios from "axios";

export const api_domain = `https://fetch-hiring.s3.amazonaws.com/`;
export const api_url = `hiring.json`;

export const getData = async () => {
    return await Axios.get(`${api_domain}${api_url}`);
}