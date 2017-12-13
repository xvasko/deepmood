import { connect } from 'react-redux';
import { MainContent } from '../../components/layout/MainContent';

const mapStateToProps = (state) => {
    return {
        messages: state.messages.byChannelId.get(state.channels.activeChannel),
        activeChannel: state.channels.activeChannel,
    }};

const enhancer = connect(mapStateToProps, undefined);
const connectedComponent = enhancer(MainContent);

export { connectedComponent as MainContent }