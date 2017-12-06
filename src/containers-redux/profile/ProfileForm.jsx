import { connect } from 'react-redux';
import { ProfileForm } from '../../components/profile/ProfileForm'
import { updateProfileDetails } from '../../actions/profile/updateProfileDetails'

const mapStateToProps = (state) => {
    return {
        email: state.profile.profileDetails.email,
        name: state.profile.profileDetails.name,
        phone: state.profile.profileDetails.phone,
        avatarId: state.profile.profileDetails.avatarId,
        channels: state.profile.profileDetails.channels
    }};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (email, newDetails, channels) => {
        dispatch(updateProfileDetails(email, newDetails, channels));
    }
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ProfileForm);

export { connectedComponent as ProfileForm };