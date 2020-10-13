import { connect } from 'react-redux';
import { singlePostThunk, deletePostThunk, singlePostResetedThunk } from '../thunks/postThunk';
import DetailPostCard from '../components/PostCard/DetailPostCard';

const mapStateToProps = (state) => ({
	singlePost: state.posts.singlePost,
	deletePost: state.posts.deletePost,
	login: state.auth.login
});
const mapDispatchToProps = {
	singlePostThunk,
	deletePostThunk,
	singlePostResetedThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailPostCard);
