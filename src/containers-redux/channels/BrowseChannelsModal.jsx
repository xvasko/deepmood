import { connect } from 'react-redux';
import { BrowseChannelsModal } from '../../components/channels/BrowseChannelsModal'
import { closeBrowseChannelsModal } from '../../actions/channels/actionCreators'

const mapStateToProps = (state) => {
    return {
        isOpen: state.channels.isBrowseModalOpen,
    }};

const mapDispatchToProps = (dispatch) => ({
    onCloseBrowseModal: () => {
        dispatch(closeBrowseChannelsModal())
    }
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(BrowseChannelsModal);

export { connectedComponent as BrowseChannelsModal};