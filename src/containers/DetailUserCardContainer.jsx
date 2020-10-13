import { connect } from 'react-redux';
import { singleUserThunk, singleUserResetedThunk } from '../thunks/userThunk';
import DetailUserCard from '../components/UserCard/DetailUserCard';

const mapStateToProps = (state) => ({
	singleUser: state.users.singleUser,
	login: state.auth.login
});
const mapDispatchToProps = {
	singleUserThunk,
	singleUserResetedThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailUserCard);
