import styled from 'styled-components';

export const StyledSidebar = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: 240px;
    background: #26C6DA;
    
    span {
        a {
            font-size: 16px;
        }
    }
    
    a {
        font-size: 20px;
        outline: 0;
        &:hover {
            text-decoration: none;
            color: #01579B;
        }
    }
    
    ul {
        min-height: 300px;
        list-style: none;
        padding: 10px 0px;
        margin: 0px;
        
        li {
            height: 40px;
            
            &:hover {
                    background-color: #80DEEA;
            }
            a {
                display: inline-block;
                width: 100%;
                padding-left: 20px;
                padding-top: 5px;
                color: #01579B;
                font-size: 18px;
                
                &:hover {
                    text-decoration: none;
                    color: white;
                }
            }
            
        }
        .active {
            background-color: #80DEEA;
            height: 40px;
            
            a {
                color: #00838F;
            }
        }
    }
`;