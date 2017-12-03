import styled from 'styled-components';

export const StyledListItem = styled.li`
    button {
        display: none;
    }

    &:hover {
        background-color: Gainsboro;
        
        button {
            display: block;
        }
    }
`;