import styled from 'styled-components';

export const AvatarImage = styled.div`
    background-image: url('${props => props.src || 'assets/no-profile-picture.png'}'); 
    background-repeat: no-repeat;
    background-size: contain;
    height: 285px;
    overflow: hidden;
    margin: 10px 5px;
`;

export const AvatarMessage = styled.div`
    background-image: url('${props => props.src || 'assets/no-profile-picture.png'}'); 
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 50%;
    height: 54px;
    width: 54px;
    float: left;
    overflow: hidden;
    margin: 2px 15px 0px 0px;
`;