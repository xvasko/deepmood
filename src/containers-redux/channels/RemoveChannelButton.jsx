import { connect } from 'react-redux';
import { RemoveChannelButton } from '../../components/channels/RemoveChannelButton';
import { removeChannel } from '../../actions/channels/removeChannel';

const mapStateToProps = (state, ownProps) => ({
    channelId: ownProps.channelId,
    channelName: ownProps.channelName,
});

const mapDispatchToProps = (dispatch) => ({
    onClick: (id) => {
        dispatch(removeChannel(id));
    }
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(RemoveChannelButton);

export { connectedComponent as RemoveChannelButton };