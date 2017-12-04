import { connect } from 'react-redux';
import { RegisterForm } from '../../components/login/RefisterForm'
import { registerUser } from '../../actions/shared/registerUser'

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (details) => {
        dispatch(registerUser(details));
    }
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(RegisterForm);

export { connectedComponent as RegisterForm };