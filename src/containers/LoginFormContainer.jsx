import { connect } from 'react-redux';
import LoginForm from '../components/Form/LoginForm';
import { loginThunk } from '../thunks/authThunk';

const mapStateToProps = (state) => ({
	login: state.auth.login
});
const mapDispatchToProps = {
	loginThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
