// 1. import AxiosInstance
import { AxiosInstance } from "../../util/AxiosInstance";

export const getAllCategories = async () => {
  // 2. add the URI
  const URI = "/categories";

  try {
    const response = await // mention the method here
    AxiosInstance.get(URI);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// in try we get the response & in catch we get the error
// it is a organised structure of if else condition where,
// in try we get a true response & in catch we get a false response.
