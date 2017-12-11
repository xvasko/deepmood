import { connect } from 'react-redux';
import { BrowseChannelsModal } from '../../components/channels/BrowseChannelsModal'
import { closeBrowseChannelsModal } from '../../actions/channels/actionCreators'
import { updateChannel } from '../../actions/channels/updateChannel'

const mapStateToProps = (state) => {
    return {
        userEmail: state.profile.profileDetails.email,
        userChannels: state.profile.profileChannels,
        channels: state.channels.allIds.map(id => state.channels.byId.get(id)).toList(),
        isOpen: state.channels.isBrowseModalOpen,
    }};

const mapDispatchToProps = (dispatch) => ({
    onCloseBrowseModal: () => {
        dispatch(closeBrowseChannelsModal())
    },
    onJoinChannel: (channelId, newUsers) => {
        dispatch(updateChannel(channelId, newUsers))
    }
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(BrowseChannelsModal);

export { connectedComponent as BrowseChannelsModal};