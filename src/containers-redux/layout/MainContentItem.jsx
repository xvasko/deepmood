import { connect } from 'react-redux';
import { removeMessage } from '../../actions/messages/removeMessage'
import { MainContentItem } from '../../components/layout/MainContentItem'
import { updateMessage } from '../../actions/messages/updateMessage'

const mapStateToProps = (state) => ({
    activeChannelId: state.channels.activeChannel,
    users: state.users.allIds.map(usr => state.users.byId.get(usr)),
    usersById: state.users.byId,
    currentUserEmail: state.profile.profileDetails.email
});

const mapDispatchToProps = (dispatch) => ({
    onRemove: (channelId, messageId) => dispatch(removeMessage(channelId, messageId)),
    onUpdate: (channelId, messageId, editedMessage, customData) => dispatch(updateMessage(channelId, messageId, editedMessage, customData))
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(MainContentItem);

export { connectedComponent as MainContentItem }