import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	log: state.log
});
const AuthRouteLogF = (props) => {
	const { log, component: Component, ...rest } = props;
	return (
		<Route
			{...rest}
			render={(props) => {
				if (log.isAuthenticated) {
					return <Redirect to="/" />;
				} else {
					return <Component {...props} />;
				}
			}}
		/>
	);
};

export default connect(mapStateToProps)(AuthRouteLogF);
