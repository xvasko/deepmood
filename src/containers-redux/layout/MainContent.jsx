import { connect } from 'react-redux';
import { MainContent } from '../../components/layout/MainContent';

const mapStateToProps = (state) => {
    return {
        messages: state.messages.byChannelId.get('43303430-1d01-472e-aef9-6eb0dda69549'),
    }};

const enhancer = connect(mapStateToProps, undefined);
const connectedComponent = enhancer(MainContent);

export { connectedComponent as MainContent }