import { connect } from 'react-redux';
import { singleTagThunk, singleTagResetedThunk } from '../thunks/tagThunk';
import DetailTagCard from '../components/TagCard/DetailTagCard';

const mapStateToProps = (state) => ({
	singleTag: state.tags.singleTag,
	login: state.auth.login
});
const mapDispatchToProps = {
	singleTagThunk,
	singleTagResetedThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailTagCard);
