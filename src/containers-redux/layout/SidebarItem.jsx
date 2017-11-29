import { connect } from 'react-redux';
import { SidebarItem } from '../../components/layout/SidebarItem'
import { changeActiveChannel } from '../../actions/channels/actionCreators'

const mapDispatchToProps = (dispatch) => ({
    onClick: (channelName) => dispatch(changeActiveChannel(channelName))
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(SidebarItem);

export { connectedComponent as SidebarItem }