import Card from "../card";
import React from "react";
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from "@nivo/bar";
import styled from "styled-components";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const Content = styled.div`
    height: 300px;
    width: 100%;

    & > div {
        height: 90%;
    }
`;

const BarGraph = ({ data }) => (
    <Card width="70%">
        {" "}
        <Content>
            <ResponsiveBar
                data={data}
                keys={["active", "recovered", "deaths", "critical"]}
                indexBy="continent"
                margin={{ top: 50, right: 130, bottom: 50, left: 100 }}
                padding={0.3}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "nivo" }}
                defs={[
                    {
                        id: 'green',
                        type: 'patternDots',
                        background: '#7be772',
                        color: '#7be772',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: '#f75353f',
                        color: '#f75353f',
                        rotation: -45,
                        lineWidth: 2,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'recovered'
                        },
                        id: 'green'
                    },
                    {
                        match: {
                            id: 'deaths'
                        },
                        id: 'lines'
                    }
                ]}
                borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "continent",
                    legendPosition: "middle",
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "cases",
                    legendPosition: "middle",
                    legendOffset: -80
                }}
                // pointLabelYOffset={-12}
                labelSkipWidth={12}
                theme={{
                    textColor: "#e5e5e5",
                }}
                labelSkipHeight={12}
                labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                legends={[
                    {
                        dataFrom: "keys",
                        anchor: "bottom-right",
                        direction: "column",
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: "left-to-right",
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        symbolBorderColor: "#E5E5E5",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </Content>
    </Card>
);

export default BarGraph;
