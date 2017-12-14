import styled from 'styled-components';

export const StyledButton = styled.button`
    float: right;
    border: 1px solid #17a2b8;
    border-radius: 50%;
    background-color: transparent;
    color: white;
    padding: 0px 7px 2px 7px;
    margin-top: 4px;
    
    &:hover {
        background-color: #17a2b8;
    }
    
    &:focus {
        outline: 0;
    }
`;