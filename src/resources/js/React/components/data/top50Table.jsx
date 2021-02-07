import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@material-ui/core";

import Card from "../card";
import React from "react";
import { formatNumber } from "../../services/formatNumber";
import styled from "styled-components";

const StyledTableCell = styled(TableCell)`
    background-color: ${({ header }) => (header ? "#131D2E" : "transparent")};
    color: white;
`;

const StyledTableContainer = styled(TableContainer)`
    background-color: transparent;
    max-height: 350px;
`;

const Container = styled.div`
    max-height: 440px;
    border-radius: 0.75rem;
    width: 400px;
    padding: 1rem;
    background-color: white;
`;

const StyledTable = styled(Table)`
    border-color: black;
`

const Top50Table = ({ tableData }) => {
    return (
        <Card>
            <StyledTableContainer>
                <StyledTable size="small" aria-label="a dense table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell header>Rank</StyledTableCell>
                            <StyledTableCell header>Country</StyledTableCell>
                            <StyledTableCell align="right" header>
                                Cases
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row, key) => (
                            <TableRow key={row.country}>
                                <StyledTableCell component="th" scope="row">
                                    {key + 1}
                                </StyledTableCell>
                                <StyledTableCell>{row.country}</StyledTableCell>
                                <StyledTableCell align="right">
                                    {formatNumber(row.cases)}
                                </StyledTableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </StyledTable>
            </StyledTableContainer>
        </Card>
    );
};

export default Top50Table;
