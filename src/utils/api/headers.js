export const getHeader = () => {
    return {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }
}

export const getAuthorizedHeader = (token) => {
    return {
        headers: {
            'Authorization': 'bearer ' + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }
}