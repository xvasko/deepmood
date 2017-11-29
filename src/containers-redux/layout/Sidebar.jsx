import { connect } from 'react-redux';
import { Sidebar } from '../../components/layout/Sidebar';
import memoizee from 'memoizee';

const getChannels = (channels) => channels.allIds.map(id => channels.byId.get(id)).toList();
const getMemoizedChannels = memoizee(getChannels);

const mapStateToProps = (state) => {
    if(state.channels.allIds.size > 0) {
        return { channels: getMemoizedChannels(state.channels) }
    } else {
        return { channels: [] };
    }};

const enhancer = connect(mapStateToProps, undefined);
const connectedComponent = enhancer(Sidebar);

export { connectedComponent as SidebarRedux }