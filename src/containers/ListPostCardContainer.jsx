import { connect } from 'react-redux';
import ListPostCard from '../components/PostCard/ListPostCard';
import { fetchPostThunk, fetchPostResetedThunk, filterByPostThunk } from '../thunks/postThunk';

const mapStateToProps = (state) => ({
	fetchPost: state.posts.fetchPost
});
const mapDispatchToProps = {
	fetchPostThunk,
	fetchPostResetedThunk,
	filterByPostThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(ListPostCard);
