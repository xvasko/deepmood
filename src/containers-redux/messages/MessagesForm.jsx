import { connect } from 'react-redux';
import { MessagesForm } from '../../components/messages/MessagesForm'
import { createMessage } from '../../actions/messages/createMessage'

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (channelId, message) => {
        dispatch(createMessage(channelId, message));
    }
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(MessagesForm);

export { connectedComponent as MessagesForm };