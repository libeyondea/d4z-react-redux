import { connect } from 'react-redux';
import ListPostCard from '../components/PostCard/ListPostCard';
import {
	fetchPostThunk,
	fetchPostResetedThunk,
	filterByPostThunk,
	loadDataThunk,
	filterByValueThunk
} from '../thunks/postThunk';

const mapStateToProps = (state) => ({
	fetchPost: state.posts.fetchPost
});
const mapDispatchToProps = {
	fetchPostThunk,
	fetchPostResetedThunk,
	filterByPostThunk,
	loadDataThunk,
	filterByValueThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(ListPostCard);
