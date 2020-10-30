import { connect } from 'react-redux';
import { singleCategoryThunk, singleCategoryResetedThunk } from '../thunks/categoryThunk';
import DetailCategoryCard from '../components/CategoryCard/DetailCategoryCard';

const mapStateToProps = (state) => ({
	singleCategory: state.categories.singleCategory,
	login: state.auth.login
});
const mapDispatchToProps = {
	singleCategoryThunk,
	singleCategoryResetedThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailCategoryCard);
