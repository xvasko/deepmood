import { connect } from 'react-redux';
import { Avatar } from '../../components/profile/Avatar.jsx';
import { uploadUserAvatar } from '../../actions/profile/uploadUserAvatar';

const mapStateToProps = (state) => ({
    uri: state.profile.avatarUri,
});

const mapDispatchToProps = (dispatch) => ({
    onUpload: (files) => dispatch(uploadUserAvatar(files[0]))
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Avatar);

export { connectedComponent as Avatar };