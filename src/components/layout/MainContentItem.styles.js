import styled from 'styled-components';

export const StyledListItem = styled.li`
    button {
        display: none;
    }
    
    textarea { 
        height: 40px;
        padding: 6px;
        margin-top: 10px;
    }
    
    a.update {
        position: absolute;
        margin: 18px;
    }
    
    a.cancel {
        position: absolute;
        margin: 18px 0px 0px 84px;
    }

    &:hover {
        background-color: Gainsboro;
        
        button {
            display: block;
        }
    }
`;