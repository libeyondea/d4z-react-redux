import { connect } from 'react-redux';
import { editPostThunk, updatePostThunk, editPostResetedThunk } from '../thunks/postThunk';
import { fetchTagThunk, fetchTagResetedThunk } from '../thunks/tagThunk';
import { fetchCategoryThunk, fetchCategoryResetedThunk } from '../thunks/categoryThunk';
import EditPostForm from '../components/Form/EditPostForm';

const mapStateToProps = (state) => ({
	editPost: state.posts.editPost,
	updatePost: state.posts.updatePost,
	fetchTag: state.tags.fetchTag,
	fetchCategory: state.categories.fetchCategory
});
const mapDispatchToProps = {
	editPostThunk,
	updatePostThunk,
	fetchTagResetedThunk,
	fetchCategoryResetedThunk,
	editPostResetedThunk,
	fetchTagThunk,
	fetchCategoryThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);
