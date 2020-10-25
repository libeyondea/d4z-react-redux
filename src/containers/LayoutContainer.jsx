import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutThunk } from '../thunks/authThunk';
import { fetchRecursiveCategoryThunk } from '../thunks/categoryThunk';
import Layout from '../components/Layout/Layout';

const mapStateToProps = (state) => ({
	login: state.auth.login,
	fetchRecursiveCategory: state.categories.fetchRecursiveCategory
});
const mapDispatchToProps = {
	logoutThunk,
	fetchRecursiveCategoryThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout));
