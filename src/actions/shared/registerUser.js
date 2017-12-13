import axios from 'axios';
import { getHeader } from '../../utils/api/headers'
import { dismissError, failRegistration } from './actionCreators'
import { push } from "connected-react-router"


export const registerUser = (details) =>
    (dispatch) => {
        axios.post('https://pv247messaging.azurewebsites.net/api/6facb4bd-c869-4cd3-8fe8-af81e15a5502/user',
            JSON.stringify({email: details.email, customData: JSON.stringify({ name: details.name, phone: details.phone})}),
            getHeader())
            .then(dispatch(push('/login')))
            .catch(error => {
                const dispatchedAction = dispatch(failRegistration('Sadly, registration failed...', error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), 3500);
            });
    };
