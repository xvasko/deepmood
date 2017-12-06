import { connect } from 'react-redux';
import { Header } from '../../components/layout/Header';
import { closeInviteUsersModal, openInviteUsersModal } from '../../actions/channels/actionCreators'

const mapStateToProps = (state) => {
    if(state.channels.activeChannel) {
        return {
            channelName: state.channels.byId.get(state.channels.activeChannel).name,
            channelId: state.channels.activeChannel
        }
    } else {
        return { channels: null };
    }};

const mapDispatchToProps = (dispatch) => ({
    onOpenInviteUsersModal: () => {
        dispatch(openInviteUsersModal());
    }
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Header);

export { connectedComponent as Header }