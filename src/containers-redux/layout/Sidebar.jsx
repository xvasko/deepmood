import { connect } from 'react-redux';
import { Sidebar } from '../../components/layout/Sidebar';
import { openProfile } from '../../actions/profile/actionCreators'
import { openBrowseChannelsModal } from '../../actions/channels/actionCreators'


const mapStateToProps = (state) => {
    if(state.channels.allIds.size > 0) {
        return { channels: state.profile.profileChannels.map(id => state.channels.byId.get(id)).toList() }
    } else {
        return { channels: [] };
    }};

const mapDispatchToProps = (dispatch) => ({
    onOpenProfile: () => {
        dispatch(openProfile());
    },
    onOpenBrowse: () => {
    dispatch(openBrowseChannelsModal());
},
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Sidebar);

export { connectedComponent as SidebarRedux }