import styled from 'styled-components';

export const AvatarImage = styled.div`
    background-image: url('${props => props.src || 'assets/no-profile-picture.png'}'); 
    background-repeat: no-repeat;
    background-size: contain;
    height: 197px;
    overflow: hidden;
    margin: 10px 5px;
`;