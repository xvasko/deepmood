import jwt_decode from 'jwt-decode';

export const getCurrentUser = () => {
    return jwt_decode(localStorage.getItem('sharedAuthenticationToken')).sub;
}