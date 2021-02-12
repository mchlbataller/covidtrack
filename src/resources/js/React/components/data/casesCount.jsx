import "fontsource-roboto/500.css";

import Card from '../card';
import React from "react";
import { formatNumber } from "../../services/formatNumber";
import styled from "styled-components";

const Content = styled.div`
    padding: 1rem 1.25rem;
    line-height: 0rem;

    .active {
        font-size: 2.25rem;
        margin: 1.5rem 0 1.25rem 0;
        color: #97b4ff;

        & > span {
            font-size: 1rem;
            color: #e5e5e5;
        }
    }

    div.footer {
        display: flex;
        flex-direction: row;

        & > p.deaths {
            color: #ff574d;
        }

        & > p {
            margin-left: 0.25rem;
            font-weight: 500;
            color: #76e265;

            & > span {
                font-weight: normal;
                color: #e5e5e5;
            }
        }
    }

    & > div.country {
        display: flex;
        align-items: center;
        margin: 0 0;
        font-weight: 500;
        color: #f5f5f5;

        & > img {
            height: 15px;
            margin-left: 0.5rem;
        }
    }
`;

/**
 * A component for displaying cases counts.
 */
const CasesCountCard = ({ country, active, recovered, deaths, flag }) => {
    return (
        <Card style={{minWidth: '330px', marginRight: '1rem'}}>
            {" "}
            <Content>
                <div className="country">
                    <p className="country">{country}</p>
                    <img src={flag} alt={country} />
                </div>
                <p className="active">
                    {formatNumber(active)} <span>active cases</span>
                </p>
                <div className="footer">
                    <p className="recovered">
                        {formatNumber(recovered)} <span>recovered</span>
                    </p>
                    <p className="deaths">
                        {formatNumber(deaths)} <span>deaths</span>
                    </p>
                </div>
            </Content>
        </Card>
    );
};

export default CasesCountCard;
