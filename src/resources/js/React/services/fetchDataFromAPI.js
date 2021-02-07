import axios from "axios";

// Service for fetching COVID-19 cases data from source
export const fetchData = async (url, params, country) => {
    let data;
    await axios
        .get(country ? `${url}/${country}` : url, {
            params: params
        })
        .then(response => {
            // console.log("Fetched data!");
            data = response.data;
        })
        .catch(err => {
            console.log(err);
        });

    return data;
};
