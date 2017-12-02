import { connect } from 'react-redux';
import { SidebarItem } from '../../components/layout/SidebarItem'
import { fetchExistingMessages } from '../../actions/messages/fetchExistingMessages'

const mapDispatchToProps = (dispatch) => ({
    onClick: (channelId) => dispatch(fetchExistingMessages(channelId))
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(SidebarItem);

export { connectedComponent as SidebarItem }