import axios from "axios";
import rootNavigation from "../navigation/rootNavigation";

let base_api_url = "https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1";

const axiosInstance = axios.create({
    baseURL: base_api_url,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err.response.status === 401) {
            // logout user if token expires
            rootNavigation.reset("Signin");
        }
        return Promise.reject(err);
    }
);

export default axiosInstance;
