import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutThunk } from '../thunks/authThunk';
import { fetchCategoryThunk } from '../thunks/categoryThunk';
import Layout from '../components/Layout/Layout';

const mapStateToProps = (state) => ({
	login: state.auth.login,
	fetchCategory: state.categories.fetchCategory
});
const mapDispatchToProps = {
	logoutThunk,
	fetchCategoryThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout));
