import axios from 'axios'

const submitCountry = () => {
        axios
            .get("/user/data/create", {
                params: {
                    country: "Philippinetangina"
                }
            })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    };

    export default submitCountry