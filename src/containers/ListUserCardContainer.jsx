import { connect } from 'react-redux';
import { fetchUserThunk, fetchUserResetedThunk } from '../thunks/userThunk';
import ListUserCard from '../components/UserCard/ListUserCard';

const mapStateToProps = (state) => ({
	fetchUser: state.users.fetchUser
});
const mapDispatchToProps = {
	fetchUserThunk,
	fetchUserResetedThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(ListUserCard);
