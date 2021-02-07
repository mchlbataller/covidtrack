import styled from 'styled-components'

const Card = styled.div`
    background-color: #162234;
    border: 1px solid #5b6b88;
    border-radius: 6px;
    width: ${props => props.width ? props.width : 'auto'};
    margin-left: 20px;
`

export default Card;