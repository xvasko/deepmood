import styled from 'styled-components';

export const StyledMainContent = styled.div`
    ul {
        background-color: white;
        margin-top: 60px;
        margin-bottom: 80px;
        list-style: none;
        padding: 0px;
        
        li {
            padding: 10px 20px;
            
            button {
                min-width: 27px;
                margin-left: 8px;
            }
            
            .separator {
                margin-right: 20px;
            }
        }
    }
`;