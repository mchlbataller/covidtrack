import { Box, Button, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";

import BarGraph from "../components/data/topContinents";
import CasesCountCard from "../components/data/casesCount";
import Header from "../components/header";
import NavBar from "../components/navbar";
import Subheader from "../components/subheader";
import TimelineGraph from "../components/data/timeline";
import Top50Table from "../components/data/top50Table";
import axios from "axios";
import { dataSources } from "../utils/dataSources";
import { fetchData as fetchDataFromCoronaAPI } from "../services/fetchDataFromAPI";
import fetchUserInfo from "../services/fetchUserInfo";
import { getTop5CountriesByCase } from "../services/getTop5CountriesByCase";
import { parseTimelineCovidData } from "../services/parseTimelineCovidData";
import styles from "../styles/index.css";
import submitCountry from "../services/submitCountry";

const Homepage = () => {
    const [latestData, setLatestData] = useState(null);

    // Data used for timeline chart.
    const [timelineData, setTimelineData] = useState(null);
    const [counterData, setCounterData] = useState(null);
    const [tableData, setTableData] = useState(null);
    const [continentData, setContinentData] = useState(null);

    // User authentication checker
    const [isAuthenticated, setAuthenticationStatus] = useState(false);

    const [userData, updateUserData] = useState();

    // 1. Fetch all data needed on component load.
    useEffect(() => {
        (async function() {
            setLatestData(
                await fetchDataFromCoronaAPI(dataSources.latestCovidData, {
                    sort: "cases"
                })
            );
        })();

        (async function() {
            updateUserData(await fetchUserInfo());
            setContinentData(
                await fetchDataFromCoronaAPI(dataSources.continent, {
                    yesterday: "false"
                })
            );
        })();
    }, []);

    // Process the data when the latestData state successfully updates
    useEffect(async () => {
        if (latestData) {
            let top5CountriesByCase = getTop5CountriesByCase(latestData);

            setTimelineData(
                await parseTimelineCovidData(
                    top5CountriesByCase,
                    dataSources.last30DaysCovidData
                )
            );

            const top3CountriesByCase = [];
            for (let i = 0; i < 3; i++) {
                top3CountriesByCase.push(latestData[i]);
            }
            setCounterData(top3CountriesByCase);

            const top50CountriesByCase = [];
            for (let i = 0; i < 50; i++) {
                top50CountriesByCase.push(latestData[i]);
            }
            setTableData(top50CountriesByCase);
        }
    }, [latestData]);

    // Set the authentication status everytime userData updates.
    useEffect(() => {
        console.log(`User Data: ${JSON.stringify(userData)}`);
        setAuthenticationStatus(userData ? true : false);
    }, [userData]);

    return (
        <>
            <NavBar
                authenticated={isAuthenticated}
                name={userData?.name}
                maxWidth="lg"
            />
            <Container maxWidth="lg">
                {isAuthenticated && (
                    <>
                        <Header>Welcome user!</Header>
                        <Subheader>Set your country:</Subheader>
                        {/* TODO: Fetch list of countries then display them
                            as buttons
                        */}
                        <Button
                            onClick={() => submitCountry("Philippines")}
                            variant="contained"
                            color="secondary"
                        >
                            Philippines
                        </Button>

                        <Subheader>Today's stats</Subheader>
                    </>
                )}

                <Header>World</Header>
                <section>
                    <Subheader>Top 3 Countries</Subheader>
                    <div className={styles.countries}>
                        {counterData &&
                            counterData.map((item, key) => (
                                <CasesCountCard
                                    country={item.country}
                                    active={item.active}
                                    deaths={item.deaths}
                                    recovered={item.recovered}
                                    flag={item.countryInfo.flag}
                                    key={key}
                                />
                            ))}
                    </div>
                </section>
                <br />
                <section>
                    <Subheader>COVID-19 growth over the last 30 days</Subheader>
                    {timelineData && <TimelineGraph data={timelineData} />}
                </section>
                <br />

                <section>
                    <Subheader>World Rankings</Subheader>
                    <Box display="flex" flexDirection="row">
                        {continentData && (
                            <>
                                <BarGraph data={continentData} />
                            </>
                        )}
                        {tableData && <Top50Table tableData={tableData} />}
                    </Box>
                </section>
            </Container>
        </>
    );
};

export default Homepage;
