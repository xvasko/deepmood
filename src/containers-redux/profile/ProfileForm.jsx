import { connect } from 'react-redux';
import { ProfileForm } from '../../components/profile/ProfileForm'
import { updateProfile } from '../../actions/profile/updateProfile'

const mapStateToProps = (state) => {
    return {
        email: state.profile.profileDetails.email,
        name: state.profile.profileDetails.name,
        phone: state.profile.profileDetails.phone
    }};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (email, newDetails) => {
        dispatch(updateProfile(email, newDetails));
    }
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ProfileForm);

export { connectedComponent as ProfileForm };