import { connect } from 'react-redux';
import ListPostCard from '../components/PostCard/ListPostCard';
import {
	fetchPostThunk,
	fetchPostResetedThunk,
	filterByValueThunk,
	nextPageThunk,
	previousPageThunk,
	goToPageThunk,
	sortByValueThunk
} from '../thunks/postThunk';

const mapStateToProps = (state) => ({
	fetchPost: state.posts.fetchPost
});
const mapDispatchToProps = {
	fetchPostThunk,
	fetchPostResetedThunk,
	filterByValueThunk,
	nextPageThunk,
	previousPageThunk,
	goToPageThunk,
	sortByValueThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(ListPostCard);
