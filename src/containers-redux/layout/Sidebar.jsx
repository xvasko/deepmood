import { connect } from 'react-redux';
import { Sidebar } from '../../components/layout/Sidebar';
import memoizee from 'memoizee';
import { createChannel } from '../../actions/channels/createChannel'
import { closeProfile, openProfile } from '../../actions/profile/actionCreators'

const getChannels = (channels) => channels.allIds.map(id => channels.byId.get(id)).toList();
const getMemoizedChannels = memoizee(getChannels);

const mapStateToProps = (state) => {
    if(state.channels.allIds.size > 0) {
        return { channels: getMemoizedChannels(state.channels) }
    } else {
        return { channels: [] };
    }};

const mapDispatchToProps = (dispatch) => ({
    onOpenProfile: (name) => {
        dispatch(openProfile());
    }
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Sidebar);

export { connectedComponent as SidebarRedux }