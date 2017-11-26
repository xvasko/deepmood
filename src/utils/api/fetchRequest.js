import { validateResponse } from './validateResponse';

export const fetchRequest = (uri, method, token, bodyJson) =>
    fetch(
        uri,
        {
            method: method,
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json-patch+json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(bodyJson),
        })
        .then(validateResponse);
