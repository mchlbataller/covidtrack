/**
 *  Fetches user information.
 *  
 *  Returns a 404 if user is not found in the database,
 *  401 if the user is not yet authorized.
 */
import axios from 'axios'

export default async function fetchUserInfo() {
    let data;
    await axios
        .get("/user/data")
        .then(res => {
            data = res.data;
        })
        .catch(err => {
            console.log(`services/fetchUserInfo: ${err.data}`);
            data = false
        });

    return data;
}