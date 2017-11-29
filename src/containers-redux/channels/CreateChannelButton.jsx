import { connect } from 'react-redux';
import { CreateChannelButton } from '../../components/channels/CreateChannelButton';
import { createChannel } from '../../actions/channels/createChannel';
import { fetchExistingMessages } from '../../actions/messages/fetchExistingMessages'

const mapDispatchToProps = (dispatch) => ({
    onClick: (name) => {
        //dispatch(createChannel(name));
        dispatch(fetchExistingMessages('43303430-1d01-472e-aef9-6eb0dda69549'))
    }
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(CreateChannelButton);

export { connectedComponent as CreateChannelButton };