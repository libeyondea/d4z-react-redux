import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	login: state.auth.login
});
const AuthRouteLogT = (props) => {
	const { login, component: Component, ...rest } = props;
	return (
		<Route
			{...rest}
			render={(props) =>
				login.isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	);
};

export default connect(mapStateToProps)(AuthRouteLogT);
