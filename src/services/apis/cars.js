import axios from "axios";

export const fetchCars = async () => {
  try {
    const response = await axios.get("https://freetestapi.com/api/v1/cars");
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error; // Re-throw the error so the caller can handle it
  }
};
export const fetchCarInfo = async (id) => {
  try {
    const response = await axios.get(
      `https://freetestapi.com/api/v1/cars/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error; // Re-throw the error so the caller can handle it
  }
};
