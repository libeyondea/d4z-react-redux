import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const mapStateToProps = (state) => ({
	log: state.log
});
const AuthRouteLogT = (props) => {
	const { log, component: Component, ...rest } = props;
	return (
		<Route
			{...rest}
			render={(props) => {
				if (log.isAuthenticated && localStorage.getItem('jwtToken')) {
					return <Component {...props} />;
				} else {
					return <Redirect to="/login" />;
				}
			}}
		/>
	);
};
export default connect(mapStateToProps)(AuthRouteLogT);
