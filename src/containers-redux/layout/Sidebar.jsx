import { connect } from 'react-redux';
import { Sidebar } from '../../components/layout/Sidebar'
import memoizee from 'memoizee'
import { fetchExistingChannels } from '../../actions/channels/fetchExistingChannels'

const getChannels = (channels) => channels.allIds.map(id => channels.byId.get(id)).toList();
const getMemoizedChannels = memoizee(getChannels);

const mapStateToProps = (state) => {
    if(state.channels.allIds.size > 0) {
        return { channels: getMemoizedChannels(state.channels) }
    } else {
        return {};
    }};

const mapDispatchToProps = (dispatch) => ({
    onComponentWillMount: () => dispatch(fetchExistingChannels())
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Sidebar);

export { connectedComponent as SidebarRedux }