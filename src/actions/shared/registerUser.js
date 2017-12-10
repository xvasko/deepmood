import axios from 'axios';
import { getHeader } from '../../utils/api/headers'


export const registerUser = (details) =>
    () => {
        axios.post('https://pv247messaging.azurewebsites.net/api/6facb4bd-c869-4cd3-8fe8-af81e15a5502/user',
            JSON.stringify({email: details.email, customData: JSON.stringify({ name: details.name, phone: details.phone})}),
            getHeader())
            .catch(error => {
                console.log(error);
            });
    };
