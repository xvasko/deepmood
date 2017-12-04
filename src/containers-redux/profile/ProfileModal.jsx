import { connect } from 'react-redux';
import { ProfileModal } from '../../components/profile/ProfileModal'
import { closeProfile } from '../../actions/profile/actionCreators'

const mapStateToProps = (state) => {
    return {
        isOpen: state.profile.isProfileOpen,
    }};

const mapDispatchToProps = (dispatch) => ({
    onCloseProfile: () => {
        dispatch(closeProfile());
    }
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(ProfileModal);

export { connectedComponent as ProfileModal};