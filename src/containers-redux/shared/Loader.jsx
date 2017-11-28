import { connect } from 'react-redux';
import { Loader } from '../../components/shared/Loader.jsx';

const mapStateToProps = (state, ownProps) => ({
    isLoading: state.shared.isAuthenticating,
});

const enhancer = connect(mapStateToProps);
const connectedComponent = enhancer(Loader);


export { connectedComponent as Loader };
