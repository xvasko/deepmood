import styled from 'styled-components';

export const StyledMessagesForm = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background: white;
    padding: 16px 20px;
    height: 80px;
    
    input {
        height: 48px;
        padding: 12px 12px 15px 12px;
        border-radius: 43px;
        border: 2px gray solid;
        width: 400px;
        
        &:focus {
            outline: 0;
        }
    }
    
    #submitButton {
        position: absolute;
         left: -9999px;
    }
    
`;