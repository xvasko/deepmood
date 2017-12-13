import { connect } from 'react-redux';
import { LoginForm } from '../../components/login/LoginForm';
import { authenticateUser } from '../../actions/shared/authenticateUser'

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (email) => {
        dispatch(authenticateUser(email));
    }
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(LoginForm);

export { connectedComponent as LoginForm };