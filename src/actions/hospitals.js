import * as api from "../api/index";
import { setHospitals } from "../reducers/hospitals";

export const getAllHospitals = () => async (dispatch) => {
  try {
    const { data } = await api.fetchHospitals();
    dispatch({ type: setHospitals, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
