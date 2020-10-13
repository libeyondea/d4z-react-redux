import { connect } from 'react-redux';
import ListPostCard from '../components/PostCard/ListPostCard';
import { fetchPostThunk, fetchPostResetedThunk } from '../thunks/postThunk';

const mapStateToProps = (state) => ({
	fetchPost: state.posts.fetchPost
});
const mapDispatchToProps = {
	fetchPostThunk,
	fetchPostResetedThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(ListPostCard);
