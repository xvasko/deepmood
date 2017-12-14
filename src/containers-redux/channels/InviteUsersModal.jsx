import { connect } from 'react-redux';
import { InviteUsersModal } from '../../components/channels/InviteUsersModal'
import { closeInviteUsersModal } from '../../actions/channels/actionCreators'
import { updateChannel } from '../../actions/channels/updateChannel'

const mapStateToProps = (state) => {
    return {
        isOpen: state.channels.isInviteModalOpen,
        channel: state.channels.activeChannel ? state.channels.byId.get(state.channels.activeChannel) : null,
        users: state.users.byId.values(),
        activeChannel: state.channels.activeChannel
    }};

const mapDispatchToProps = (dispatch) => ({
    onCloseInviteUsersModal: () => {
        dispatch(closeInviteUsersModal());
    },
    onUserInvite: (channelId, channelName, customData) => {
        dispatch(updateChannel(channelId, channelName, customData))
    }
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(InviteUsersModal);

export { connectedComponent as InviteUsersModal};