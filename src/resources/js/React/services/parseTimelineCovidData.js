import { fetchData } from "./fetchDataFromAPI";

export const parseTimelineCovidData = async (top5Countries, url) => {
    // console.log(`Countries: ${countries}`);
    const updatedTimelineData = [];

    // Get and parse the data with the Top 5 Countries.
    //
    // TODO: Change this to parallel processing for faster fetching.
    // https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop

    const data = await fetchData(url, { lastdays: 30 }, top5Countries.join(','));

    data.forEach(item => {
        const parsedData = {};
        // Assign the country as id.
        parsedData.id = item.country;
        parsedData.data = [];

        // Get the keys (date) from data, then assign it
        // to x.
        // Get the values of the date, then assign it to y.
        Object.keys(item.timeline.cases)
            .forEach(key => parsedData.data
                .push({ x: key, y: item.timeline.cases[key] }));

        // Return an array.
        updatedTimelineData.push(parsedData);
    })

    // console.log("Updated Timeline Data:" + JSON.stringify(updatedTimelineData));
    return updatedTimelineData;
};
