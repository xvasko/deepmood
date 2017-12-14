import { connect } from 'react-redux';
import { Header } from '../../components/layout/Header';
import { changeActiveChannel, openInviteUsersModal } from '../../actions/channels/actionCreators'
import { updateChannel } from '../../actions/channels/updateChannel'

const mapStateToProps = (state) => {
    if(state.channels.activeChannel) {
        return {
            userEmail: state.profile.profileDetails.email,
            channel: state.channels.activeChannel ? state.channels.byId.get(state.channels.activeChannel) : null,
            channelName: state.channels.activeChannel ? state.channels.byId.get(state.channels.activeChannel).name : null,
            channelId: state.channels.activeChannel
        }
    } else {
        return { channels: null };
    }};

const mapDispatchToProps = (dispatch) => ({
    onOpenInviteUsersModal: () => {
        dispatch(openInviteUsersModal());
    },
    onLeaveChannel: (channelId, channelName, newUsers) => {
        dispatch(updateChannel(channelId, channelName, newUsers));
        dispatch(changeActiveChannel(null));
    },
    onChannelChangeName: (channelId, newChannelName, users) => {
        dispatch(updateChannel(channelId, newChannelName, users));
    }
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Header);

export { connectedComponent as Header }