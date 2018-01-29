import { getCurrentUser } from './getCurrentUser'

describe('utils - get current user', () => {
    test('returns the current user encoded in JWT token', () => {
        const dummyToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyQGdtYWlsLmNvbSIsImp0aSI6Ijc0MDBiMThlLWQ4NmYtNGIzZS1iMzU2LTA3YTg5NjY5YzgyOSIsImlhdCI6MTUxNzI0MjU3NCwibmJmIjoxNTE3MjQyNTc0LCJleHAiOjE1MTczMjg5NzQsImlzcyI6IlBWMjQ3IEFQSSIsImF1ZCI6IlBWMjQ3IFN0dWRlbnRzIn0.ewycbIN8bJCmr17_F4_OO8exSze4s3rb1v7hN43llzk';
        const expectedUserName = 'user@gmail.com';
        localStorage.setItem('sharedAuthenticationToken', dummyToken);
        const receivedUserName = getCurrentUser();

        expect(receivedUserName).toEqual(expectedUserName);
    });
})