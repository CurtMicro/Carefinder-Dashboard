import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hospitals: [
    {
      id: 1,
      hospitalName: "Ascension",
      address: "8409 Kingsway Ln",
      city: "Racine",
      zipCode: "53406",
      county: "Mount Pleasant",
      phoneNumber: "",
      type: "Acute Care",
      ownership: "Voluntary",
      emergencyServices: "true",
      humanAddress: "8409 Kingsway Ln Racine",
      latitude: "43.064",
      longitude: "88.4691",
    },
    {
      id: 2,
      hospitalName: "Ascension",
      address: "8409 Kingsway Ln",
      city: "Racine",
      zipCode: "53406",
      county: "Mount Pleasant",
      phoneNumber: "",
      type: "Acute Care",
      ownership: "Voluntary",
      emergencyServices: "true",
      humanAddress: "8409 Kingsway Ln Racine",
      latitude: "43.064",
      longitude: "88.4691",
    },
  ],
};

export const hospitals = createSlice({
  name: "hospitals",
  initialState,
  reducers: {
    setHospitals: (state, action) => {
      state.hospitals = [...state.hospitals, action.payload];
    },
  },
});

export const { setHospitals } = hospitals.actions;

export default hospitals.reducer;
