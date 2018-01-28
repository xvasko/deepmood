import { connect } from 'react-redux';
import { AuthenticatedPage } from '../../components/app/AuthenticatedPage';
import { initialDataFetch } from '../../actions/shared/initialDataFetch'

const mapDispatchToProps = (dispatch) => ({
    initialFetch: () => {
        dispatch(initialDataFetch());
    }
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(AuthenticatedPage);

export { connectedComponent as AuthenticatedPage };