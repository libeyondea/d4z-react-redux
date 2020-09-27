import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	log: state.log
});
const AuthRouteLogT = (props) => {
	const { log, component: Component, ...rest } = props;
	return (
		<Route
			{...rest}
			render={(props) => {
				if (log.isAuthenticated) {
					return <Component {...props} />;
				} else {
					return <Redirect to="/login" />;
				}
			}}
		/>
	);
};

export default connect(mapStateToProps)(AuthRouteLogT);
