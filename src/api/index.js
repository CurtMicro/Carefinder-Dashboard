import axios from "axios";

const baseUrl = "http://www.knautzfamilywi.com/CareFinder-1.0.0/api/";

const api_key = process.env.REACT_APP_CAREFINDER_API_KEY;

export const fetchHospitals = async () => {
  try {
    const response = axios.get(baseUrl + api_key + "/");
  } catch (err) {
    console.log(err.stack);
  }
};
