import axios from "axios";

export const fetchCars = async () => {
  try {
    const response = await axios.get("https://myfakeapi.com/api/cars/");
    return response?.data?.cars;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error; // Re-throw the error so the caller can handle it
  }
};
export const fetchCarInfo = async (id) => {
  try {
    const response = await axios.get(`https://myfakeapi.com/api/cars/${id}`);
    return response?.data?.Car;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error; // Re-throw the error so the caller can handle it
  }
};
export const fetchFilterCars = async (type) => {
  try {
    const response = await axios.get(
      `https://myfakeapi.com/api/cars/name/${type}`
    );
    return response?.data?.Cars;
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error; // Re-throw the error so the caller can handle it
  }
};
