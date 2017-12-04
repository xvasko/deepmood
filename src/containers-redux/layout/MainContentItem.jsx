import { connect } from 'react-redux';
import { removeMessage } from '../../actions/messages/removeMessage'
import { MainContentItem } from '../../components/layout/MainContentItem'
import { updateMessage } from '../../actions/messages/updateMessage'

const mapStateToProps = (state) => ({
    activeChannelId: state.channels.activeChannel,
});

const mapDispatchToProps = (dispatch) => ({
    onRemove: (channelId, messageId) => dispatch(removeMessage(channelId, messageId)),
    onUpdate: (channelId, messageId, editedMessage) => dispatch(updateMessage(channelId, messageId, editedMessage))
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(MainContentItem);

export { connectedComponent as MainContentItem }