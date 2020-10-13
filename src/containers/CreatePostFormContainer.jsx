import { connect } from 'react-redux';
import CreatePostForm from '../components/Form/CreatePostForm';
import { createPostThunk } from '../thunks/postThunk';
import { fetchTagThunk, fetchTagResetedThunk } from '../thunks/tagThunk';
import { fetchCategoryThunk, fetchCategoryResetedThunk } from '../thunks/categoryThunk';

const mapStateToProps = (state) => ({
	createPost: state.posts.createPost,
	fetchTag: state.tags.fetchTag,
	fetchCategory: state.categories.fetchCategory
});
const mapDispatchToProps = {
	createPostThunk,
	fetchTagThunk,
	fetchCategoryThunk,
	fetchTagResetedThunk,
	fetchCategoryResetedThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm);
