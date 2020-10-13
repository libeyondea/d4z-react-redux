import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutThunk } from '../thunks/authThunk';
import Layout from '../components/Layout/Layout';

const mapStateToProps = (state) => ({
	login: state.auth.login
});
const mapDispatchToProps = {
	logoutThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout));
