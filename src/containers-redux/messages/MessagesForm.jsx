import { connect } from 'react-redux';
import { MessagesForm } from '../../components/messages/MessagesForm'
import { createMessage } from '../../actions/messages/createMessage'

const mapStateToProps = (state) => {
    return {
        activeChannel: state.channels.activeChannel,
    }};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (channelId, message) => {
        dispatch(createMessage(channelId, message));
    }
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(MessagesForm);

export { connectedComponent as MessagesForm };