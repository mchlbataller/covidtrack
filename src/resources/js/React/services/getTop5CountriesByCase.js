import axios from 'axios'

export const getTop5CountriesByCase = data => {
    // Get the first 5 countries from data.
    const top5Countries = [];
    for (let i = 0; i < 5; i++) {
        top5Countries.push(data[i].country);
    }

    return top5Countries;
};
