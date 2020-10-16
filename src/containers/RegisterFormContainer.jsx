import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { registerThunk, registerResetedThunk } from '../thunks/authThunk';
import RegisterForm from '../components/Form/RegisterForm';

const mapStateToProps = (state) => ({
	register: state.auth.register
});
const mapDispatchToProps = {
	registerThunk,
	registerResetedThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterForm));
