import { connect } from 'react-redux';
import { Loader } from '../../components/shared/Loader.jsx';

const mapStateToProps = (state, ownProps) => ({
    isLoading: ownProps.stateLoadingSelector(state),
});

const enhancer = connect(mapStateToProps);
const connectedComponent = enhancer(Loader);


export { connectedComponent as Loader };
