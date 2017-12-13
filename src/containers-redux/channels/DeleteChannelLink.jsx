import { connect } from 'react-redux';
import { DeleteChannelLink } from '../../components/channels/DeleteChannelLink';
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
const connectedComponent = enhancer(DeleteChannelLink);

export { connectedComponent as DeleteChannelLink };