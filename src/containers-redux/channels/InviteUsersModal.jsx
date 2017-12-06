import { connect } from 'react-redux';
import { InviteUsersModal } from '../../components/channels/InviteUsersModal'
import { closeInviteUsersModal } from '../../actions/channels/actionCreators'

const mapStateToProps = (state) => {
    return {
        isOpen: state.channels.isInviteModalOpen,
    }};

const mapDispatchToProps = (dispatch) => ({
    onCloseInviteUsersModal: () => {
        dispatch(closeInviteUsersModal());
    }
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(InviteUsersModal);

export { connectedComponent as InviteUsersModal};