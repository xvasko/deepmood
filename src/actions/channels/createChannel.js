import { performAuthorizedRequest } from '../performAuthorizedRequest'
import { fetchRequest } from '../../utils/api/fetchRequest'

export const createChannel = (details) =>
    async (dispatch, getState) => {
        try {
            return await performAuthorizedRequest(dispatch, async () => {
                const receivedChannelInfo = await fetchRequest(
                    'https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502',
                    'PATCH',
                    getState().authentication.token,
                    JSON.parse('kj[{"path": "/channels/-","op":"add","value":{"name":"office"}}]')
                );
                console.log(receivedChannelInfo);
            });
        }
        catch (error) {
            console.log(error)
        }
    }