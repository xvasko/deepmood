import { connect } from 'react-redux';
import { InviteUsersModal } from '../../components/channels/InviteUsersModal'
import { closeInviteUsersModal } from '../../actions/channels/actionCreators'

const mapStateToProps = (state) => {
    return {
        isOpen: state.channels.isInviteModalOpen,
        channelId: state.channels.activeChannel,
        channelName: state.channels.activeChannel ? state.channels.byId.get(state.channels.activeChannel).name : "no active channel",
        users: state.users.byId.values()
    }};

const mapDispatchToProps = (dispatch) => ({
    onCloseInviteUsersModal: () => {
        dispatch(closeInviteUsersModal());
    }
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(InviteUsersModal);

export { connectedComponent as InviteUsersModal};