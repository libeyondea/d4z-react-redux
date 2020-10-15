import { connect } from 'react-redux';
import { fetchTagThunk, fetchTagResetedThunk } from '../thunks/tagThunk';
import ListTagCard from '../components/TagCard/ListTagCard';

const mapStateToProps = (state) => ({
	fetchTag: state.tags.fetchTag
});
const mapDispatchToProps = {
	fetchTagThunk,
	fetchTagResetedThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(ListTagCard);
