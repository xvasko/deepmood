import { connect } from 'react-redux';
import { LayoutSelector } from '../components/LayoutSelector.js';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.authentication.token,
});

const enhancer = connect(mapStateToProps);
const connectedComponent = withRouter(enhancer(LayoutSelector));

export { connectedComponent as LayoutSelector };
