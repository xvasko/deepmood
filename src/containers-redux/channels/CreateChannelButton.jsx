import { connect } from 'react-redux';
import { CreateChannelButton } from '../../components/channels/CreateChannelButton';
import { createChannel } from '../../actions/channels/createChannel';

const mapDispatchToProps = (dispatch) => ({
    onClick: () => {
        dispatch(createChannel());
    }
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(CreateChannelButton);

export { connectedComponent as CreateChannelButton };