import { connect } from 'react-redux';
import { removeMessage } from '../../actions/messages/removeMessage'
import { MainContentItem } from '../../components/layout/MainContentItem'

const mapStateToProps = (state) => ({
    activeChannelId: state.channels.activeChannel,
});

const mapDispatchToProps = (dispatch) => ({
    onRemove: (channelId, messageId) => dispatch(removeMessage(channelId, messageId))
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(MainContentItem);

export { connectedComponent as MainContentItem }