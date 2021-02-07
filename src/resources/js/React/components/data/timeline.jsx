import Card from "../card";
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import styled from "styled-components";
import theme from '../../utils/theme'

const WorldCasesGraph = styled.div`
    height: 300px;
    width: inherit;

    & > div {
        height: 90%;
    }
`;

export default function TimelineGraph({ data }) {
    return (
        <Card>
            <WorldCasesGraph>
                <div>
                    <ResponsiveLine
                        data={data}
                        margin={{ top: 50, right: 110, bottom: 50, left: 100 }}
                        xScale={{ type: "point" }}
                        yScale={{
                            type: "linear",
                            min: "auto",
                            max: "auto",
                            stacked: false,
                            reverse: false
                        }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            orient: "bottom",
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: "day",
                            legendOffset: 36,
                            legendPosition: "middle"
                        }}
                        axisLeft={{
                            orient: "left",
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: "cases",
                            legendOffset: -80,
                            legendPosition: "middle"
                        }}
                        theme={{
                            textColor: "#e5e5e5"
                        }}
                        pointSize={7}
                        pointColor={theme.background}
                        pointBorderWidth={1}
                        pointBorderColor={{ from: "serieColor" }}
                        pointLabelYOffset={-12}
                        useMesh={true}
                        enableSlices="x"
                        enableGridX={false}
                        enableArea={true}
                        legends={[
                            {
                                anchor: "bottom-right",
                                direction: "column",
                                justify: false,
                                translateX: 120,
                                translateY: 0,
                                itemsSpacing: 0,
                                itemDirection: "left-to-right",
                                itemWidth: 80,
                                itemHeight: 20,
                                itemOpacity: 0.75,
                                symbolSize: 12,
                                symbolShape: "circle",
                                symbolBorderColor: "#E5E5E5",
                                effects: [
                                    {
                                        on: "hover",
                                        style: {
                                            itemBackground:
                                                "rgba(0, 0, 0, .03)",
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            </WorldCasesGraph>
        </Card>
    );
}
