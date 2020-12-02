import styled from 'styled-components'

const Paragraph = styled.p`
    color: ${props => props.color || 'black'};
    font-size: ${props => props.size || '16px'};
`;

export default Paragraph;