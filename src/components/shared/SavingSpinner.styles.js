import styled from 'styled-components';
import {keyframes} from 'styled-components';

const rotate360 = keyframes`
    0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(359deg);
	}
`;

export const SavingSpinner = styled.div`
    &:before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 40px;
        height: 40px;
        margin-top: -60px;
        margin-left: -20px;
        border-radius: 50%;
        border: 3px solid #f6f;
        border-top-color: #0e0;
        border-right-color: #0dd;
        border-bottom-color: #f90;
        animation: ${rotate360} 0.4s linear infinite;
    }
`;
