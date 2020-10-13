import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { registerThunk } from '../thunks/authThunk';
import RegisterForm from '../components/Form/RegisterForm';

const mapStateToProps = (state) => ({
	register: state.auth.register
});
const mapDispatchToProps = {
	registerThunk
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterForm));
